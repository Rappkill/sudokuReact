import { makepuzzle } from 'sudoku';

export interface SudokuCell {
  id: string;
  value: number | null;
  notes: number[];
  column: number;
  container: number;
  row: number;
  isReadOnly: boolean;
  isWrong: boolean;
}

interface CellCoordinate {
  container: number;
  row: number;
  column: number;
}

function computeCellCoordinates(index: number): CellCoordinate {
  let row = 0;
  let column = 0;
  let container = 0;

  row = Math.floor(index / 9) + 1;
  column = (index % 9) + 1;

  container =
    Math.floor(index / 3) -
    Math.floor(index / 9) * 3 +
    Math.floor(index / 27) * 3 +
    1;

  return { container, row, column };
}

function generateSudokuNumbers() {
  const puzzle: [] = makepuzzle();

  return puzzle.map((value: number) => {
    if (value != null) {
      return (value = value + 1);
    } else {
      return value;
    }
  });
}

function checkIsReadOnly(value: number): boolean {
  if (value == null) {
    return false;
  } else {
    return true;
  }
}

export function generateSudoku(): SudokuCell[] {
  const puzzle = generateSudokuNumbers();

  return puzzle.map((value: number, index: number) => {
    const { container, row, column } = computeCellCoordinates(index);
    const isReadOnly = checkIsReadOnly(value);

    return {
      id: index.toString(),
      notes: [],
      value,
      column,
      row,
      container,
      isReadOnly,
      isWrong: false,
    };
  });
}

export function getContainers(
  sudokuNumbers: SudokuCell[]
): Array<SudokuCell[]> {
  return sudokuNumbers.reduce(
    (containers: Array<SudokuCell[]>, sudokuCell) => {
      containers[sudokuCell.container - 1].push(sudokuCell);

      return containers;
    },
    [[], [], [], [], [], [], [], [], []]
  );
}

export function highlightAssociatedCells(
  selectedCell: SudokuCell,
  cell: SudokuCell
): boolean {
  if (
    selectedCell.container == cell.container ||
    selectedCell.row == cell.row ||
    selectedCell.column == cell.column
  ) {
    return true;
  } else {
    return false;
  }
}

export function getClassName(
  selectedCell: SudokuCell,
  cell: SudokuCell
): string {
  let className = 'grid-cell';

  className += ` row-${cell.row}`;
  className += ` column-${cell.column}`;
  className += ` container-${cell.container}`;

  if (!cell.isReadOnly) {
    className += ' editable';
  }

  if (cell.notes.length != 0) {
    className += ' notes-class';
  }

  if (selectedCell.id == cell.id) {
    className += ' toggle-heavy';
  }

  if (highlightAssociatedCells(selectedCell, cell)) {
    className += ' toggle';
  }

  if (selectedCell.value == cell.value && selectedCell.value != null) {
    className += ' same';
  }

  if (cell.isWrong) {
    className += ' wrong';
  }

  return className;
}

export function checkWrongNumbers(
  sudokuCells: SudokuCell[],
  sudokuCell: SudokuCell
): boolean {
  let isWrong = false;

  sudokuCells.forEach((item) => {
    if (item.id == sudokuCell.id) {
      return isWrong;
    }
    if (item.value && sudokuCell.value) {
      if (item.value == sudokuCell.value) {
        if (item.row == sudokuCell.row) {
          isWrong = true;
        } else if (item.column == sudokuCell.column) {
          isWrong = true;
        } else if (item.container == sudokuCell.container) {
          isWrong = true;
        }
      }
    }
  });

  return isWrong;
}

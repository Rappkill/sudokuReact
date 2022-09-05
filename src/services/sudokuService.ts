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

export function generateSudoku(): SudokuCell[] {
  const puzzle = generateSudokuNumbers();

  return puzzle.map((value: number, index: number) => {
    const { container, row, column } = computeCellCoordinates(index);
    const isReadOnly = value != null;

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

export function getContainers(sudokuCells: SudokuCell[]): Array<SudokuCell[]> {
  return sudokuCells.reduce(
    (containers: Array<SudokuCell[]>, sudokuCell) => {
      containers[sudokuCell.container - 1].push(sudokuCell);

      return containers;
    },
    [[], [], [], [], [], [], [], [], []]
  );
}

export function checkShouldHighlightCell(
  selectedCell: SudokuCell,
  cell: SudokuCell
): boolean {
  return (
    selectedCell.container == cell.container ||
    selectedCell.row == cell.row ||
    selectedCell.column == cell.column
  );
}

export function getClassName(
  selectedCell: SudokuCell,
  cell: SudokuCell
): string {
  const classNames = ['grid-cell'];

  classNames.push(`row-${cell.row}`);
  classNames.push(`column-${cell.column}`);
  classNames.push(`container-${cell.container}`);

  if (!cell.isReadOnly) {
    classNames.push('editable');
  }

  if (cell.notes.length != 0) {
    classNames.push('notes-class');
  }

  if (selectedCell.id == cell.id) {
    classNames.push('toggle-heavy');
  }

  if (checkShouldHighlightCell(selectedCell, cell)) {
    classNames.push('toggle');
  }

  if (selectedCell.value == cell.value && selectedCell.value != null) {
    classNames.push('same');
  }

  if (cell.isWrong) {
    classNames.push('wrong');
  }

  return classNames.join(' ');
}

function isSudokuCellInvalid(
  currentCell: SudokuCell,
  sudokuCells: SudokuCell[]
): boolean {
  let isInvalid = false;

  sudokuCells.forEach((sudokuCell) => {
    if (sudokuCell.id == currentCell.id) {
      return;
    }
    if (sudokuCell.value && currentCell.value) {
      if (sudokuCell.value == currentCell.value) {
        if (sudokuCell.row == currentCell.row) {
          isInvalid = true;
        } else if (sudokuCell.column == currentCell.column) {
          isInvalid = true;
        } else if (sudokuCell.container == currentCell.container) {
          isInvalid = true;
        }
      }
    }
  });

  return isInvalid;
}

export function checkWrongNumbers(sudokuPuzzle: SudokuCell[]): void {
  sudokuPuzzle.map((item) => {
    item.isWrong = isSudokuCellInvalid(item, sudokuPuzzle);
  });
}

export function formatTime(minutes: number, seconds: number): string {
  const minutesString = minutes > 9 ? minutes.toString() : '0' + minutes;

  const secondsString = seconds > 9 ? seconds.toString() : '0' + seconds;

  return `${minutesString}:${secondsString}`;
}

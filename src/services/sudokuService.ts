import { makepuzzle } from 'sudoku';

export interface SudokuCell {
  id: string;
  value: number | null;
  notes: number[];
  column: number;
  container: number;
  row: number;
  isReadOnly: boolean;
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

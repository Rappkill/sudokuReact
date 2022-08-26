import { makepuzzle } from 'sudoku';

export interface SudokuCell {
  value: number | null;
  notes: number[];
  id: string;
  column: number;
  container: number;
  row: number;
}

interface CellCoordinate {
  container: number;
  row: number;
  column: number;
}

function computeCellCoordinates(index: number): CellCoordinate {
  let row;
  let column;
  let container = 0;
  // de revizitat logica, expus functie pura

  row = Math.floor(index / 9) + 1;
  column = (index % 9) + 1;

  if (index % 3 == 0) {
    container++;
  }
  if (index % 9 == 0 && index > 0) {
    container = container - 3;
  }
  if (index % 27 == 0 && index > 0) {
    container = container + 3;
  }

  return { container, row, column };
}

export function generateSudoku(): SudokuCell[] {
  const puzzle: [] = makepuzzle();

  return puzzle.map((value: number, index: number) => {
    const { container, row, column } = computeCellCoordinates(index);

    return {
      id: index.toString(),
      notes: [],
      value,
      column,
      row,
      container,
    };
  });
}

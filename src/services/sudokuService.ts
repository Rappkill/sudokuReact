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
  let container;

  row = Math.floor(index / 9) + 1;
  column = (index % 9) + 1;

  container =
    Math.floor(index / 3) +
    1 +
    (index / 9 >= 1
      ? index / 18 >= 1 // 9
        ? index / 36 >= 1 // 18
          ? index / 45 >= 1 // 9
            ? index / 63 >= 1 // 18
              ? index / 72 >= 1 // 9
                ? -18
                : -15
              : -12
            : -9
          : -6
        : -3
      : 0);

  //

  return { container, row, column };
}

export function generateSudoku(): SudokuCell[] {
  const puzzle: [] = makepuzzle();

  return puzzle.map((value: number, index: number) => {
    const { container, row, column } = computeCellCoordinates(index);

    return {
      container,
      id: index.toString(),
      notes: [],
      value,
      column,
      row,
    };
  });
}

//function
//increment value + 1

//checking isReadOnly - values
//

/* eslint-disable @typescript-eslint/no-unused-expressions */
import { makepuzzle } from 'sudoku';

const puzzle: [] = makepuzzle();

export interface SudokuCell {
  value: string | number;
  isEditable: boolean;
  isSelected: boolean;
  isClose: boolean;
  isSameNumber: boolean;
  id: string;
  column: number;
  row: number;
  container: number;
}

let cellRow = 0;
let cellColumn = 1;
let cellContainer = 0;

function setClass(index: number): Array<number> {
  if (index % 9 == 0) {
    cellRow++;
  }

  if (index % 9 !== 0) {
    cellColumn++;
  } else {
    cellColumn = 1;
  }

  if (index % 3 == 0) {
    cellContainer++;
  }
  if (index % 9 == 0 && index > 0) {
    cellContainer = cellContainer - 3;
  }
  if (index % 27 == 0 && index > 0) {
    cellContainer = cellContainer + 3;
  }

  return [cellContainer, cellRow, cellColumn];
}

export const sudokuNumbers: SudokuCell[] = puzzle.map(
  (elem: number, index: number) => {
    let value;
    let isEditable;
    const isSelected = false;
    const isClose = false;
    const isSameNumber = false;
    const id = index.toString();

    const [container, row, column] = setClass(index);

    if (elem == null) {
      value = '';
      isEditable = true;
    } else {
      value = elem + 1;
      isEditable = false;
    }

    return {
      id: id,
      value: value,
      isEditable: isEditable,
      isSelected: isSelected,
      isSameNumber: isSameNumber,
      isClose: isClose,
      column: column,
      row: row,
      container: container,
    };
  }
);

// console.log(sudokuNumbers);

// class CellClassList {
//   container: number;

//   row: number;

//   column: number;

//   constructor() {
//     (this.container = 0), (this.row = 0), (this.column = 1);
//   }

//   addClassNames(index: number) {
//     if (index % 9 == 0) {
//       this.row++;
//     }

//     if (index % 9 !== 0) {
//       this.column++;
//     } else {
//       this.column = 1;
//     }

//     if (index % 3 == 0) {
//       this.container++;
//     }
//     if (index % 9 == 0 && index > 0) {
//       this.container = this.container - 3;
//     }
//     if (index % 27 == 0 && index > 0) {
//       this.container = this.container + 3;
//     }

//     return [this.container, this.row, this.column];
//   }
// }

// export const sudokuClassLogic = new CellClassList();

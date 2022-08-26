import React from 'react';
import { SudokuCell } from '../services/sudokuService';
import Cell from './Cell';

// interface CellContainerProp {
//   containerArray: SudokuCell[];
// }

function CellContainer(): JSX.Element {
  return (
    <div className="grid-container">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}

export default CellContainer;

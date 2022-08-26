import React from 'react';
import { SudokuCell } from '../services/sudokuService';
import Cell from './Cell';

interface CellContainerProp {
  containerArray: Array<SudokuCell[]>;
}

function CellContainer({ containerArray }: CellContainerProp): JSX.Element {
  return (
    <div className="grid-container">
      {console.log(containerArray)}
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

import React from 'react';
import { SudokuCell } from '../services/sudokuService';
import Cell from './Cell';

interface CellContainerProp {
  cellList: SudokuCell[];
}

function CellContainer({ cellList }: CellContainerProp): JSX.Element {
  return (
    <div className="grid-container">
      {cellList.map((cell) => {
        return <Cell key={cell.id} cell={cell} />;
      })}
    </div>
  );
}

export default CellContainer;

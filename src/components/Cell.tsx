import React from 'react';
import { SudokuCell } from '../services/sudokuService';

interface CellProp {
  cell: SudokuCell;
}

function Cell({ cell }: CellProp): JSX.Element {
  return <div className="grid-cell">{cell.value}</div>;
}

export default Cell;

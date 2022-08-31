import React from 'react';
import { SudokuCell } from '../services/sudokuService';
import Cell from './Cell';

interface CellContainerProp {
  cellList: SudokuCell[];
  handleSelectedCell(cell: SudokuCell): void;
  selectedCell: SudokuCell;
}

function CellContainer({
  cellList,
  handleSelectedCell,
  selectedCell,
}: CellContainerProp): JSX.Element {
  return (
    <>
      {cellList.map((cell) => {
        return (
          <Cell
            key={cell.id}
            cell={cell}
            handleSelectedCell={handleSelectedCell}
            selectedCell={selectedCell}
          />
        );
      })}
    </>
  );
}

export default CellContainer;

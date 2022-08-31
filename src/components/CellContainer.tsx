import React from 'react';
import { SudokuCell } from '../services/sudokuService';
import Cell from './Cell';

interface CellContainerProp {
  isActiveNotes: boolean;
  cellList: SudokuCell[];
  handleSelectedCell(cell: SudokuCell): void;
}

function CellContainer({
  cellList,
  handleSelectedCell,
  isActiveNotes,
}: CellContainerProp): JSX.Element {
  return (
    <>
      {cellList.map((cell) => {
        return (
          <Cell
            key={cell.id}
            cell={cell}
            handleSelectedCell={handleSelectedCell}
            isActiveNotes={isActiveNotes}
          />
        );
      })}
    </>
  );
}

export default CellContainer;

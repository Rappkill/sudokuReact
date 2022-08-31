import React, { useCallback } from 'react';
import { SudokuCell } from '../services/sudokuService';

interface CellProp {
  isActiveNotes: boolean;
  cell: SudokuCell;
  handleSelectedCell(cell: SudokuCell): void;
}

function Cell({
  cell,
  handleSelectedCell,
  isActiveNotes,
}: CellProp): JSX.Element {
  const handleClick = useCallback(() => {
    handleSelectedCell(cell);
  }, []);

  return (
    <div
      className={`grid-cell row-${cell.row} column-${cell.column} container-${
        cell.container
      } ${isActiveNotes ? 'notes-cell' : ''}`}
      onClick={handleClick}
    >
      {cell.value}
    </div>
  );
}

export default Cell;

import React, { useCallback } from 'react';
import { SudokuCell, getClassName } from '../services/sudokuService';
import { NoteCell } from './NoteCell';

interface CellProp {
  cell: SudokuCell;
  handleSelectedCell(cell: SudokuCell): void;
  selectedCell: SudokuCell;
}

const noteValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Cell({
  cell,
  handleSelectedCell,
  selectedCell,
}: CellProp): JSX.Element {
  const handleClick = useCallback(() => {
    handleSelectedCell(cell);
  }, [handleSelectedCell, cell]);

  const getNotesValue = () => {
    return noteValues.map((noteValue) => {
      let value = null;

      if (cell.notes.includes(noteValue)) {
        value = noteValue;
      }

      return <NoteCell value={value} key={noteValue} />;
    });
  };

  return (
    <div className={getClassName(selectedCell, cell)} onClick={handleClick}>
      {cell.notes.length == 0 && cell.value}
      {cell.notes.length != 0 && getNotesValue()}
    </div>
  );
}

export default Cell;

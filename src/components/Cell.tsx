import React, { useCallback } from 'react';
import { SudokuCell } from '../services/sudokuService';

interface CellProp {
  cell: SudokuCell;
  handleSelectedCell(cell: SudokuCell): void;
  selectedCell: SudokuCell;
}

const nineList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function highlightAssociatedCells(
  selectedCell: SudokuCell,
  cell: SudokuCell
): boolean {
  if (
    selectedCell.container == cell.container ||
    selectedCell.row == cell.row ||
    selectedCell.column == cell.column
  ) {
    return true;
  } else {
    return false;
  }
}

function Cell({
  cell,
  handleSelectedCell,
  selectedCell,
}: CellProp): JSX.Element {
  const handleClick = useCallback(() => {
    handleSelectedCell(cell);
  }, []);

  return (
    <div
      className={`grid-cell row-${cell.row} column-${cell.column} container-${
        cell.container
      }  ${!cell.isReadOnly ? 'editable' : ''} ${
        cell.notes.length != 0 ? 'notes-class' : ''
      } ${selectedCell.id == cell.id ? 'toggle-heavy' : ''}
        ${highlightAssociatedCells(selectedCell, cell) ? 'toggle' : ''}
      `}
      onClick={handleClick}
    >
      {cell.notes.length == 0 && cell.value}
      {cell.notes.length != 0 &&
        nineList.map((notePosition) => {
          let noteValue = null;

          if (cell.notes.includes(notePosition)) {
            noteValue = notePosition;
          }

          return (
            <div key={notePosition} className="notes-cell">
              {noteValue}
            </div>
          );
        })}
    </div>
  );
}

export default Cell;

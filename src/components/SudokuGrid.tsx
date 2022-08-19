/* eslint-disable react/jsx-no-bind */
import React, { BaseSyntheticEvent, useCallback } from 'react';
import { SudokuCell } from '../services/sudokuGrid';

interface SudokuGridProps {
  setSelectedCell: React.Dispatch<
    React.SetStateAction<HTMLDivElement | undefined>
  >;

  sudokuArray: SudokuCell[];
}

export function SudokuGrid({
  setSelectedCell,
  sudokuArray,
}: SudokuGridProps): JSX.Element {
  const handleContent = useCallback((e: BaseSyntheticEvent) => {
    setSelectedCell(e.target);
    console.log(e);
  }, []);

  return (
    <div className="sudoku-wrapper">
      {sudokuArray.map((item, index) => {
        const customKey = index + '';

        return (
          <div
            className={`grid-cell row-${item.row} column-${
              item.column
            } container-${item.container} ${
              !item.isEditable ? 'not-editable' : ''
            } ${item.isSelected ? 'toggle-heavy' : ''} ${
              item.isClose ? 'toggle' : ''
            } ${item.isSameNumber ? 'same-number' : ''}`}
            key={customKey}
            id={`${index}`}
            onClick={handleContent}
          >
            {item.value}
          </div>
        );
      })}
    </div>
  );
}

import React, { createContext, useCallback, useContext } from 'react';
import { SudokuCell } from '../services/sudokuService';

const numpadNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface NumpadProp {
  assignNumpadValue(value: number): void;
  cell: SudokuCell;
}

export function Numpad({ assignNumpadValue, cell }: NumpadProp): JSX.Element {
  const checkNumpadValue = useCallback(
    (e) => {
      const value = Number(e.target.value);
      assignNumpadValue(value);
    },
    [cell]
  );

  return (
    <div className="numpad-wrapper">
      {numpadNumbers.map((number) => {
        return (
          <button
            key={number}
            className="numpad-btn"
            value={number}
            onClick={checkNumpadValue}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
}

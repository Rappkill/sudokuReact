import React, { useCallback } from 'react';

const numpadNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface NumpadProp {
  handleAddNumber(number: number): void;
}

export function Numpad({ handleAddNumber }: NumpadProp): JSX.Element {
  const checkNumpadValue = useCallback((e) => {
    const value = Number(e.target.value);
    handleAddNumber(value);
  }, []);

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

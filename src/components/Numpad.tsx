import React, { useCallback } from 'react';

const numpadNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface NumpadProp {
  assignNumpadValue(value: number): void;
}

export function Numpad({ assignNumpadValue }: NumpadProp): JSX.Element {
  const checkNumpadValue = useCallback(
    (e) => {
      const value = Number(e.target.value);
      assignNumpadValue(value);
    },
    [assignNumpadValue]
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

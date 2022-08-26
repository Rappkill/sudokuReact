import React from 'react';

const numpadNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function Numpad(): JSX.Element {
  return (
    <div className="numpad-wrapper">
      {numpadNumbers.map((number) => {
        return (
          <button key={number} className="numpad-btn" value={number}>
            {number}
          </button>
        );
      })}
    </div>
  );
}

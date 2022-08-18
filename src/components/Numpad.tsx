import React, { BaseSyntheticEvent, useCallback } from 'react';

const numpadNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface NumpadProps {
  setNumpadValue: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export function Numpad({ setNumpadValue }: NumpadProps): JSX.Element {
  const handleAddNumber = useCallback((e) => {
    setNumpadValue(e.target.value);
  }, []);

  return (
    <div className="numpad-wrapper">
      {numpadNumbers.map((number) => {
        return (
          <button
            key={number}
            className="numpad-btn"
            value={number}
            onClick={handleAddNumber}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
}

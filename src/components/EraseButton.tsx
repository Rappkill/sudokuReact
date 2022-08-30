import React from 'react';

interface EraseProp {
  handleErase(): void;
}

export function EraseButton({ handleErase }: EraseProp): JSX.Element {
  return (
    <button className="action-button" onClick={handleErase}>
      Erase
    </button>
  );
}

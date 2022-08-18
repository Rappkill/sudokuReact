import React from 'react';

interface EraseProps {
  handleErase(): void;
}

export function EraseButton({ handleErase }: EraseProps): JSX.Element {
  return (
    <button className="action-button" onClick={handleErase}>
      Erase
    </button>
  );
}

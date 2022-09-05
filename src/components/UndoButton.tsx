import React from 'react';

interface UndoProp {
  handleUndo(): void;
}

export function UndoButton({ handleUndo }: UndoProp): JSX.Element {
  return (
    <button className="action-button" onClick={handleUndo}>
      Undo
    </button>
  );
}

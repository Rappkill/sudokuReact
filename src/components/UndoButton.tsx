import React from 'react';

// interface UndoProps {
//   handleUndo(): void;
// }

function handleUndo() {
  console.log('undo');
}

export function UndoButton(): JSX.Element {
  // const { handleUndo } = props;
  return (
    <button className="action-button" onClick={handleUndo}>
      Undo
    </button>
  );
}

import React from 'react';

function handleNotes() {
  console.log('notes');
}
export function NotesButton(): JSX.Element {
  return (
    <button className="action-button" onClick={handleNotes}>
      Notes
    </button>
  );
}

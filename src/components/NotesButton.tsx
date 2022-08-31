import React from 'react';

interface NotesProp {
  handleNotes(): void;
  isActiveNotes: boolean;
}

export function NotesButton({
  handleNotes,
  isActiveNotes,
}: NotesProp): JSX.Element {
  return (
    <button
      className={`action-button ${isActiveNotes ? 'activeNotes' : ''}`}
      onClick={handleNotes}
    >
      Notes
    </button>
  );
}

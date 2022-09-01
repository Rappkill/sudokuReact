import React from 'react';

interface NoteCellProp {
  noteValue: number | null;
}

export function NoteCell({ noteValue }: NoteCellProp): JSX.Element {
  return <div className="notes-cell">{noteValue}</div>;
}

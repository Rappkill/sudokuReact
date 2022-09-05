import React from 'react';

interface NoteCellProp {
  value: number | null;
}

export function NoteCell({ value }: NoteCellProp): JSX.Element {
  return <div className="notes-cell">{value}</div>;
}

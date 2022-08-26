import React from 'react';

interface NewGameButtonProp {
  onNewGameClick(): void;
}

export function NewGameButton({
  onNewGameClick,
}: NewGameButtonProp): JSX.Element {
  return (
    <button className="new-game-btn" onClick={onNewGameClick}>
      New Game
    </button>
  );
}

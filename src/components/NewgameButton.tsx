import React from 'react';
function handleNewGame() {
  console.log('new');
}
export function NewgameButton(): JSX.Element {
  return (
    <button className="new-game-btn" onClick={handleNewGame}>
      New Game
    </button>
  );
}

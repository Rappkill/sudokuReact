import React, { useCallback, useState } from 'react';
import { EraseButton } from './EraseButton';
import { NewGameButton } from './NewGameButton';
import { NotesButton } from './NotesButton';
import { Numpad } from './Numpad';
import SudokuGrid from './SudokuGrid';
import { Timer } from './Timer';
import { UndoButton } from './UndoButton';
import { generateSudoku, SudokuCell } from '../services/sudokuService';

function SudokuGame(): JSX.Element {
  const [sudokuPuzzle, setSudokuPuzzle] = useState<SudokuCell[]>([]);

  const handleNewGame = useCallback(() => {
    const newSudokuPuzzle = generateSudoku();
    setSudokuPuzzle(newSudokuPuzzle);
  }, []);

  return (
    <div className="game-wrapper">
      <SudokuGrid sudokuNumbers={sudokuPuzzle} />
      <div className="button-wrapper">
        <Timer />
        <NewGameButton onNewGameClick={handleNewGame} />
        <div className="buttons-control">
          <UndoButton />
          <EraseButton />
          <NotesButton />
        </div>
        <Numpad />
      </div>
    </div>
  );
}

export default SudokuGame;

//model cell
//
//state array
//pass

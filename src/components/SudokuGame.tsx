import React, { useCallback, useEffect, useState } from 'react';
import { EraseButton } from './EraseButton';
import { NewGameButton } from './NewGameButton';
import { NotesButton } from './NotesButton';
import { Numpad } from './Numpad';
import SudokuGrid from './SudokuGrid';
import { Timer } from './Timer';
import { UndoButton } from './UndoButton';
import { generateSudoku, SudokuCell } from '../services/sudokuService';

function SudokuGame(): JSX.Element {
  const [sudokuPuzzle, setSudokuPuzzle] = useState<SudokuCell[]>(() =>
    generateSudoku()
  );
  const [selectedCell, setSelectedCell] = useState<SudokuCell>();

  const handleSelectedCell = useCallback((cell) => {
    setSelectedCell(cell);

    console.log(cell);
  }, []);

  // const handleAddNumber = useCallback(
  //   (number) => {
  //     sudokuPuzzle.map((item) => {
  //       if (item.id == selectedCell.id) {
  //         item.value = number;
  //       }
  //     });

  //     setSudokuPuzzle([...sudokuPuzzle]);
  //   },
  //   [selectedCell]
  // );

  const handleAddNumber = useCallback(
    (number) => {
      console.log(number);

      console.log(selectedCell);
    },
    [selectedCell]
  );

  const handleErase = useCallback(() => {
    console.log(selectedCell);
  }, [selectedCell]);

  const handleNewGame = useCallback(() => {
    const newSudokuPuzzle = generateSudoku();
    setSudokuPuzzle(newSudokuPuzzle);
  }, []);

  return (
    <div className="game-wrapper">
      <SudokuGrid
        sudokuNumbers={sudokuPuzzle}
        handleSelectedCell={handleSelectedCell}
      />
      <div className="button-wrapper">
        <Timer />
        <NewGameButton onNewGameClick={handleNewGame} />
        <div className="buttons-control">
          <UndoButton />
          <EraseButton handleErase={handleErase} />
          <NotesButton />
        </div>
        <Numpad handleAddNumber={handleAddNumber} />
      </div>
    </div>
  );
}

export default SudokuGame;

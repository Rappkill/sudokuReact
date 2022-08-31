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
  const [sudokuPuzzle, setSudokuPuzzle] = useState<SudokuCell[]>(() =>
    generateSudoku()
  );
  const [selectedCell, setSelectedCell] = useState<SudokuCell>(sudokuPuzzle[0]);
  const [activeNotes, setActiveNotes] = useState<boolean>(false);

  const handleSelectedCell = useCallback((cell) => {
    setSelectedCell(cell);
  }, []);

  const handleNotes = useCallback(() => {
    setActiveNotes((prevValue) => !prevValue);
  }, [activeNotes]);

  const assignNumpadValue = useCallback(
    (number) => {
      sudokuPuzzle.map((item) => {
        if (!item.isReadOnly && item.id == selectedCell.id) {
          if (activeNotes) {
            if (!item.notes.includes(number)) {
              item.notes.push(number);
            }
          } else {
            item.notes = [];
            item.value = number;
          }
        }
      });

      setSudokuPuzzle([...sudokuPuzzle]);
    },
    [selectedCell, activeNotes]
  );

  const handleErase = useCallback(() => {
    sudokuPuzzle.map((item) => {
      if (!item.isReadOnly && item.id == selectedCell.id) {
        item.notes = [];
        item.value = null;
      }
    });

    setSudokuPuzzle([...sudokuPuzzle]);
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
        selectedCell={selectedCell}
      />
      <div className="button-wrapper">
        <Timer />
        <NewGameButton onNewGameClick={handleNewGame} />
        <div className="buttons-control">
          <UndoButton />
          <EraseButton handleErase={handleErase} />
          <NotesButton handleNotes={handleNotes} isActiveNotes={activeNotes} />
        </div>
        <Numpad
          assignNumpadValue={assignNumpadValue}
          cell={selectedCell}
          isActive={activeNotes}
        />
      </div>
    </div>
  );
}

export default SudokuGame;

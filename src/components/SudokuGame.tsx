import React, { useCallback, useState } from 'react';
import { EraseButton } from './EraseButton';
import { NewGameButton } from './NewGameButton';
import { NotesButton } from './NotesButton';
import { Numpad } from './Numpad';
import SudokuGrid from './SudokuGrid';
import { Timer } from './Timer';
import { UndoButton } from './UndoButton';
import {
  generateSudoku,
  SudokuCell,
  checkWrongNumbers,
} from '../services/sudokuService';

function SudokuGame(): JSX.Element {
  const [sudokuPuzzle, setSudokuPuzzle] = useState<SudokuCell[]>(() =>
    generateSudoku()
  );
  const [selectedCell, setSelectedCell] = useState<SudokuCell>(sudokuPuzzle[0]);
  const [isNotesActive, setActiveNotes] = useState<boolean>(false);
  const [history, setHistory] = useState<SudokuCell[]>([]);
  const [resetTimer, setResetTimer] = useState<boolean>(false);

  function validateAndUpdatePuzzle() {}

  const updateSelectedCellValue = useCallback(
    (value: number | null) => {
      if (selectedCell.isReadOnly) {
        return;
      }

      history.push(JSON.parse(JSON.stringify(selectedCell)));
      setHistory([...history]);

      const newSelectedCell = JSON.parse(JSON.stringify(selectedCell));
      if (value === null) {
        newSelectedCell.notes = [];
        newSelectedCell.value = null;

        return;
      }

      if (isNotesActive) {
        newSelectedCell.value = null;
        if (!newSelectedCell.notes.includes(value)) {
          newSelectedCell.notes.push(value);
        } else {
          // TODO: delete value from sudokuCell.notes
        }
      } else {
        newSelectedCell.notes = [];
        newSelectedCell.value = value;
      }

      const sudokuCellIndex = sudokuPuzzle.findIndex(
        (item) => item.id == newSelectedCell.id
      );
      sudokuPuzzle[sudokuCellIndex] = newSelectedCell;

      checkWrongNumbers(sudokuPuzzle);

      setSudokuPuzzle([...sudokuPuzzle]);
      setSelectedCell(newSelectedCell);
    },
    [selectedCell, history, isNotesActive, sudokuPuzzle]
  );

  const handleNotes = useCallback(() => {
    setActiveNotes((prevValue) => !prevValue);
  }, []);

  const handleErase = useCallback(() => {
    updateSelectedCellValue(null);
  }, [updateSelectedCellValue]);

  const handleUndo = useCallback(() => {
    const cellHistory = history.pop();

    if (cellHistory) {
      setSelectedCell(cellHistory);
      const sudokuCellIndex = sudokuPuzzle.findIndex(
        (item) => item.id == cellHistory.id
      );
      sudokuPuzzle[sudokuCellIndex] = cellHistory;
    }

    checkWrongNumbers(sudokuPuzzle);
    setSudokuPuzzle([...sudokuPuzzle]);
  }, [history, sudokuPuzzle]);

  const handleNewGame = useCallback(() => {
    const newSudokuPuzzle = generateSudoku();
    setSudokuPuzzle(newSudokuPuzzle);
    setSelectedCell(newSudokuPuzzle[0]);
    setHistory([]);
    setResetTimer((reset) => !reset);
  }, []);

  return (
    <div className="game-wrapper">
      <SudokuGrid
        sudokuNumbers={sudokuPuzzle}
        handleSelectedCell={setSelectedCell}
        selectedCell={selectedCell}
      />
      <div className="button-wrapper">
        <Timer handleTimerReset={resetTimer} />
        <NewGameButton onNewGameClick={handleNewGame} />
        <div className="buttons-control">
          <UndoButton handleUndo={handleUndo} />
          <EraseButton handleErase={handleErase} />
          <NotesButton
            handleNotes={handleNotes}
            isActiveNotes={isNotesActive}
          />
        </div>
        <Numpad assignNumpadValue={updateSelectedCellValue} />
      </div>
    </div>
  );
}

export default SudokuGame;

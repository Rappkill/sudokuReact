/* eslint-disable @typescript-eslint/no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import { SudokuGrid } from './SudokuGrid';
import { EraseButton } from './EraseButton';
import { NewgameButton } from './NewgameButton';
import { NotesButton } from './NotesButton';
import { Numpad } from './Numpad';
import { UndoButton } from './UndoButton';
import { Timer } from './Timer';
import {
  setCellValue,
  checkingClass,
  clearClass,
  highlightClass,
} from '../services/sudokuGame';
import { SudokuCell, sudokuNumbers } from '../services/sudokuGrid';

function SudokuGame(): JSX.Element {
  const [selectedCell, setSelectedCell] = useState<HTMLDivElement | undefined>(
    undefined
  );
  const [numpadValue, setNumpadValue] = useState<number | undefined>();
  const [sudokuArray, setSudokuArray] = useState<SudokuCell[]>(sudokuNumbers);

  useEffect(() => {
    clearClass(sudokuArray);

    if (selectedCell != undefined) {
      const [container, row, column] = checkingClass(selectedCell);
      highlightClass(container, row, column, sudokuArray, selectedCell);

      setSudokuArray([...sudokuArray]);
    }
  }, [selectedCell]);

  const handleErase = useCallback(() => {
    if (
      selectedCell != undefined &&
      !selectedCell.className.includes('not-editable')
    ) {
      selectedCell.innerHTML = '';
    }
  }, [selectedCell]);

  useEffect(() => {
    if (selectedCell != undefined && numpadValue != undefined) {
      setCellValue(selectedCell, numpadValue);
    }
  }, [numpadValue]);

  return (
    <div className="game-wrapper">
      <SudokuGrid setSelectedCell={setSelectedCell} sudokuArray={sudokuArray} />
      <div className="buttons-wrapper">
        <Timer />
        <NewgameButton />
        <div className="buttons-control">
          <UndoButton />
          <EraseButton handleErase={handleErase} />
          <NotesButton />
        </div>
        <Numpad setNumpadValue={setNumpadValue} />
      </div>
    </div>
  );
}
export default SudokuGame;

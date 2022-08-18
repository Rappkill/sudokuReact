/* eslint-disable @typescript-eslint/no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import { SudokuGrid } from './SudokuGrid';
import { EraseButton } from './EraseButton';
import { NewgameButton } from './NewgameButton';
import { NotesButton } from './NotesButton';
import { Numpad } from './Numpad';
import { UndoButton } from './UndoButton';
import { Timer } from './Timer';
import { setCellValue } from '../services/sudokuGame';
import { SudokuCell, sudokuNumbers } from '../services/sudokuGrid';

function SudokuGame(): JSX.Element {
  const [selectedCell, setSelectedCell] = useState<HTMLDivElement | undefined>(
    undefined
  );
  const [numpadValue, setNumpadValue] = useState<number | undefined>();
  const [sudokuArray, setSudokuArray] = useState<SudokuCell[]>(sudokuNumbers);

  function clearClass() {
    sudokuArray.forEach((item) => {
      item.isClose = false;
      item.isSelected = false;
      item.isSameNumber = false;
    });
  }

  useEffect(() => {
    clearClass();

    if (selectedCell != undefined) {
      let cellContainer: number;
      let cellRow: number;
      let cellColumn: number;

      selectedCell.classList.forEach((cellClass) => {
        if (cellClass.includes('container'))
          cellContainer = Number(cellClass.split('container-').pop());
        else if (cellClass.includes('row'))
          cellRow = Number(cellClass.split('row-').pop());
        else if (cellClass.includes('column'))
          cellColumn = Number(cellClass.split('column-').pop());
      });

      sudokuArray.forEach((item) => {
        if (
          item.column == cellColumn ||
          item.row == cellRow ||
          item.container == cellContainer
        ) {
          item.isClose = true;
          if (
            item.value == selectedCell.innerHTML &&
            selectedCell.innerHTML != ''
          ) {
            item.isSelected = true;
          }
        }
        if (item.id == selectedCell.id) {
          item.isSelected = true;
        }
      });

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

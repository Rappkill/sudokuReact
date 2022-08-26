import React, { useMemo, useState } from 'react';
import { SudokuCell } from '../services/sudokuService';
import CellContainer from './CellContainer';

interface SudokuGridProp {
  sudokuNumbers: SudokuCell[];
}

function SudokuGrid({ sudokuNumbers }: SudokuGridProp): JSX.Element {
  const sudokuContainers = useMemo(() => {
    return sudokuNumbers.reduce(
      (containers: Array<Array<number | null>>, sudokuCell) => {
        containers[sudokuCell.row - 1].push(sudokuCell.value);

        return containers;
      },
      [[], [], [], [], [], [], [], [], []]
      // new Array(9).fill([])
    );
  }, [sudokuNumbers]);

  console.log(sudokuContainers);

  return (
    <div className="sudoku-wrapper">
      {console.log(sudokuNumbers)}
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
      <CellContainer />
    </div>
  );
}

export default SudokuGrid;

//pass props to container

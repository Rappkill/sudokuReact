import React, { useMemo, useState } from 'react';
import { SudokuCell } from '../services/sudokuService';
import CellContainer from './CellContainer';

interface SudokuGridProp {
  sudokuNumbers: SudokuCell[];
}

function SudokuGrid({ sudokuNumbers }: SudokuGridProp): JSX.Element {
  const sudokuContainers = useMemo(() => {
    return sudokuNumbers.reduce(
      (containers: Array<SudokuCell[]>, sudokuCell) => {
        containers[sudokuCell.container - 1].push(sudokuCell);
        console.log(sudokuCell);

        return containers;
      },
      [[], [], [], [], [], [], [], [], []]
      // new Array(9).fill([])
    );
  }, [sudokuNumbers]);

  // console.log(sudokuContainers);

  return (
    <div className="sudoku-wrapper">
      {sudokuContainers.map((container, index) => (
        <CellContainer key={index} containerArray={container} />
      ))}
    </div>
  );
}

export default SudokuGrid;

//pass props to container

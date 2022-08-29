import React, { useMemo } from 'react';
import { SudokuCell, getContainers } from '../services/sudokuService';
import CellContainer from './CellContainer';

interface SudokuGridProp {
  sudokuNumbers: SudokuCell[];
}

function SudokuGrid({ sudokuNumbers }: SudokuGridProp): JSX.Element {
  const sudokuContainers = useMemo(
    () => getContainers(sudokuNumbers),
    [sudokuNumbers]
  );

  return (
    <div className="sudoku-wrapper">
      {console.log(sudokuContainers)}
      {sudokuContainers.map((container, index) => {
        const key = index.toString();

        return <CellContainer key={key} cellList={container} />;
      })}
    </div>
  );
}

export default SudokuGrid;

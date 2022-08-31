import React, { useMemo } from 'react';
import { SudokuCell, getContainers } from '../services/sudokuService';
import CellContainer from './CellContainer';

interface SudokuGridProp {
  isActiveNotes: boolean;
  sudokuNumbers: SudokuCell[];
  handleSelectedCell(cell: SudokuCell): void;
}

function SudokuGrid({
  sudokuNumbers,
  handleSelectedCell,
  isActiveNotes,
}: SudokuGridProp): JSX.Element {
  const sudokuContainers = useMemo(
    () => getContainers(sudokuNumbers),
    [sudokuNumbers]
  );

  return (
    <div className="sudoku-wrapper">
      {sudokuContainers.map((container, index) => {
        const key = index.toString();

        return (
          <div key={key} className={`grid-container ${index + 1}`}>
            <CellContainer
              key={key}
              cellList={container}
              handleSelectedCell={handleSelectedCell}
              isActiveNotes={isActiveNotes}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SudokuGrid;

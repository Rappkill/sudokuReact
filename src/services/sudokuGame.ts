import { SudokuCell } from './sudokuGrid';

export const setCellValue = (
  selectedCell: HTMLDivElement,
  numpadValue: number
): void => {
  if (!selectedCell.className.includes('not-editable'))
    selectedCell.innerHTML = numpadValue.toString();
};

export function checkingClass(cell: HTMLDivElement): number[] {
  let cellContainer = 0;
  let cellRow = 0;
  let cellColumn = 0;

  cell.classList.forEach((cellClass) => {
    if (cellClass.includes('container'))
      cellContainer = Number(cellClass.split('container-').pop());
    else if (cellClass.includes('row'))
      cellRow = Number(cellClass.split('row-').pop());
    else if (cellClass.includes('column'))
      cellColumn = Number(cellClass.split('column-').pop());
  });

  return [cellContainer, cellRow, cellColumn];
}

export function highlightClass(
  container: number,
  row: number,
  column: number,
  sudokuArray: SudokuCell[],
  selectedCell: HTMLDivElement
): void {
  sudokuArray.forEach((item) => {
    if (selectedCell.innerHTML == item.value) {
      item.isSameNumber = true;
    }
    if (
      item.column == column ||
      item.row == row ||
      item.container == container
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
}

export function clearClass(sudokuArray: SudokuCell[]): void {
  sudokuArray.forEach((item) => {
    item.isClose = false;
    item.isSelected = false;
    item.isSameNumber = false;
  });
}

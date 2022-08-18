export const setCellValue = (
  selectedCell: HTMLDivElement,
  numpadValue: number
): void => {
  if (!selectedCell.className.includes('not-editable'))
    selectedCell.innerHTML = numpadValue.toString();
};

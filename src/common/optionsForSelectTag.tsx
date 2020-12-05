export const numRangeOptions = (minValue: number, maxValue: number) => {
  let numbers = [];

  for (let i = minValue; i <= maxValue; i++) {
    numbers.push(i);
  }

  return numbers.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
};

export const elementsListOptions = (elementsList: any[]) => {
  let elements = [];

  for (let i = 0; i < elementsList.length; i++) {
    elements.push(elementsList[i]);
  }

  return elements.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
};

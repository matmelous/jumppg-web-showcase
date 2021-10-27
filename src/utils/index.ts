export const orderArray = (array: string[]): (string | number)[][] => {
  return array
    .map((item, index) => {
      return [index, item];
    })
    .sort((a, b) => {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      return 0;
    });
};

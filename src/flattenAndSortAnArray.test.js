const { flattenAndSort } = require('./flattenAndSortAnArray');

describe('Flatten and sort an array testing cases', () => {
  let result;
  test('should return empty array', () => {
    result = flattenAndSort([]);
    expect(result).toEqual([]);
  });

  test('should return an array with 2 empty arrays', () => {
    result = flattenAndSort([[], []]);
    expect(result).toEqual([]);
  });

  test('should return an array with one element with value 1', () => {
    result = flattenAndSort([[], [1]]);
    expect(result).toEqual([1]);
  });

  test('should return a flatten sort array', () => {
    result = flattenAndSort([
      [3, 2, 1],
      [7, 9, 8],
      [6, 4, 5],
    ]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should return a flatten sort array', () => {
    result = flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 100]);
  });
});

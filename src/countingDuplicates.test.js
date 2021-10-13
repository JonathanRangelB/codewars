const { duplicateCount, duplicateCount2 } = require('./countingDuplicates');

describe('Suite for Counting Unique Duplicates without being case sensitive', () => {
  test('should return 0 on empty string', () => {
    expect(duplicateCount('')).toBe(0);
  });
  test('should return 1 because the i is the only character that repeats', () => {
    expect(duplicateCount('Indivisibility')).toBe(1);
  });
  test('should return 2 because i and n are the only ones that repeats', () => {
    expect(duplicateCount('Indivisibilityn')).toBe(2);
  });
  test('should return 0 on empty string', () => {
    expect(duplicateCount2('')).toBe(0);
  });
  test('should return 1 because the i is the only character that repeats', () => {
    expect(duplicateCount2('Indivisibility')).toBe(1);
  });
  test('should return 2 because i and n are the only ones that repeats', () => {
    expect(duplicateCount2('Indivisibilityn')).toBe(2);
  });
});

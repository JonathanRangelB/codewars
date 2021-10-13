const findShort = require('./ShortestWord');

describe('Suite for shortest Word', () => {
  test('should return 1', () => {
    expect(findShort('algo d')).toBe(1);
  });
  test('should return 2', () => {
    expect(findShort('algo de')).toBe(2);
  });
  test('should return 10', () => {
    expect(findShort('animalitos')).toBe(10);
  });
});

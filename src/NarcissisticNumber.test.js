const narcissistic = require('./NarcissisticNumber');

describe('Suite for Narcissistic Numbers', () => {
  test('should find small number are all narcissistic', () => {
    expect(narcissistic(7)).toBe(true);
  });

  test('should find these numbers are narcissistic', () => {
    expect(narcissistic(371)).toBe(true);
  });

  test('should find these numbers are NOT narcissistic', () => {
    expect(narcissistic(15)).toBe(false);
  });
});

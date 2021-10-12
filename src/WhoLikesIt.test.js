const likes = require('./WhoLikesIt');
describe('Suite for: Who Likes It', () => {
  test('should say: no one likes this', () => {
    expect(likes([])).toBe('no one likes this');
  });
  test('should say: Peter likes this', () => {
    expect(likes(['Peter'])).toBe('Peter likes this');
  });
  test('should say: Jacob and Alex like this', () => {
    expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
  });
  test('should say: Max, John and Mark like this', () => {
    expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
  });
  test('should say: Alex, Jacob and 2 others like this', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe(
      'Alex, Jacob and 2 others like this'
    );
  });
  test('should say: Alex, Jacob and 3 others like this', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Jonathan'])).toBe(
      'Alex, Jacob and 3 others like this'
    );
  });
});

/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

function findShort(s = '') {
  let result = Infinity;
  s.split(' ').forEach((element) => {
    result = element.length < result ? element.length : result;
  });
  return result;
}

// findShort('algo d animacion es');

module.exports = findShort;

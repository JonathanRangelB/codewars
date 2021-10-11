const test = ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  const counts = {};
  for (const item of walk) {
    counts[item] = counts[item] ? ++counts[item] : 1;
  }
  return counts['w'] === counts['e'] && counts['n'] === counts['s'];
}
// console.log(isValidWalk(test));

function isIsogram(str) {
  if (str.lenght == 0) return true;
  return !/(.).*\1/i.test(str);
}

function toBinary(n) {
  return n.toString(2);
}



function moveZeros(arr) {
  const nonZeros = arr.filter(x => x !== 0);
  const zeros = arr.filter(x => x === 0);
  return [...nonZeros, ...zeros];
}



function countOnes(n) {
  return n.toString(2).split('1').length - 1;
}

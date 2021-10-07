export function getNumberWithSpaces(x) {
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
}

console.log(getNumberWithSpaces(1));
console.log(getNumberWithSpaces(10));
console.log(getNumberWithSpaces(1000));
console.log(getNumberWithSpaces(1000000));
console.log(getNumberWithSpaces(100000000));
console.log(getNumberWithSpaces(100000000000));

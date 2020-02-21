first = (array, n) => {
  if (n == undefined) return array[0];
  else {
    return array.filter((el, index) => index < n);
  }
};

console.log(first([7, 9, 0, -2]));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 2));

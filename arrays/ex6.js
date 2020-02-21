binary_search = (array, n) => {
  return array.indexOf(n);
};

var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_search(items, 1)); //0
console.log(binary_search(items, 5)); //4

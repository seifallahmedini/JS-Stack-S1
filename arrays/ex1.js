array_Clone = array => {
  return array.map(el => el);
};

array1 = [1, 2, 4, 0];
array2 = array_Clone(array1);
array2[0] = 2;
console.log(array1);
console.log(array2);

// solution avec slice

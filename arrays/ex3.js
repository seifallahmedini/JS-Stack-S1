first = (array, n) => {
  if (n == undefined) return array[0];
  else {
    return array.filter((el, index) => index < n);
  }
};

// console.log(first([7, 9, 0, -2], 3));

last = (array, n) => {
  if (n == undefined) return array[array.length - 1];
  else {
    let rev1 = array.reverse();
    // console.log(rev1);

    let res = first(rev1, n);
    // console.log("fdfd", res);
    // console.log(res.reverse());

    return res.reverse();
  }
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

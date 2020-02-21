string_parameterize = ch => {
  let array = ch.split(" ");
  let res = "";
  array.forEach((el, index) => {
    if (index < array.length - 1) {
      res = res + el + "-";
    } else {
      res = res + el;
    }
  });
  return res;
};

console.log(string_parameterize("Robin Singh from USA"));

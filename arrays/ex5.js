color_array_string = array => {
  let myColor = "";
  let myColor1 = "";
  array.forEach((el, index) => {
    if (index < array.length) {
      myColor = myColor + el + ",";
      myColor1 = myColor1 + el + "+";
    } else myColor = myColor + el;
  });

  console.log(myColor);
  console.log(myColor1);
  console.log(myColor);

  return myColor;
};

color_array_string(["Red", "Green", "White", "Black"]);

abbrev_name = (ch, n) => {
  return ch.split(" ")[0] + " " + ch.split(" ")[1].charAt(0) + ".";
};

console.log(abbrev_name("Robin Singh"));

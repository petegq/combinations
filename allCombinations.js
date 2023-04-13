const fs = require("fs");

function allCombinations(input, length, curstr) {
  if (curstr.length == length) return [curstr];
  const ret = [];
  for (var i = 0; i < input.length; i++) {
    ret.push.apply(ret, allCombinations(input, length, curstr + input[i]));
  }
  return ret;
}

const input = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const length = 2;
const combinations = allCombinations(input, length, "");

fs.writeFileSync(`output-${length}.txt`, combinations.join("\n"));

console.log(
  `${combinations.length} combinations saved to output-${length}.txt`
);


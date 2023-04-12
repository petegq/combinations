const fs = require("fs");

function generator(length) {
  const result = [];
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;

  function recurse(current, depth) {
    if (depth === length) {
      result.push(current);
      return;
    }

    for (let i = 0; i < charactersLength; i++) {
      recurse(current + characters[i], depth + 1);
    }
  }

  recurse("", 0);
  return result;
}

const length = 5;
const combinations = generator(length);

fs.writeFileSync(`output-${length}.txt`, combinations.join("\n"));

console.log(`${combinations.length} combinations saved to output-${length}.txt`);

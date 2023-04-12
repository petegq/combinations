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

const combinations = generator(3);
console.log(combinations);

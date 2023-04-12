function allCombinations(input, length, curstr) {
    if(curstr.length == length) return [ curstr ];
    const ret = [];
    for(var i = 0; i < input.length; i++) {
        ret.push.apply(ret, allPossibleCombinations(input, length, curstr + input[i]));
    }
    return ret;
}

const input = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
console.log(allCombinations(input, 2, ''));

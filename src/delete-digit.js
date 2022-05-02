const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newstr = "" + n;
  let maxNumb = +newstr.slice(1, newstr.length);
  console.log(`maxnumb = ${maxNumb}`);
  for (let i = 1; i < newstr.length; i++) {
    console.log(i);
    let firstPart = newstr.slice(0, i);
    let secondPart = newstr.slice(i + 1, newstr.length);
    let sumPart = firstPart + secondPart;
    console.log(`sumPart = ${+sumPart}`);
    if (+sumPart >= maxNumb) {
      maxNumb = +sumPart;
      console.log(`new maxNumb = ${maxNumb}`);
    }
  }
  return maxNumb;
}

module.exports = {
  deleteDigit,
};

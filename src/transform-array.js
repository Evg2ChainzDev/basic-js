const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let resultArr = [];
  let j = 0;
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      if (arr[i] === "--double-next") {
        if (i !== arr.length - 1) {
          resultArr[j] = arr[i + 1];
          j++;
        }
      } else if (arr[i] === "--double-prev") {
        if (i !== 0) {
          resultArr[j] = arr[i - 1];
          j++;
        }
      } else if (arr[i] === "--discard-prev") {
        if (i !== 0) {
          resultArr.pop();
          j--;
        }
      } else if (arr[i] === "--discard-next") {
        i++;
      } else {
        resultArr[j] = arr[i];
        j++;
      }
    } else {
      resultArr[j] = arr[i];
      j++;
    }
    // console.log(resultArr);
  }
  return resultArr;
}

module.exports = {
  transform,
};

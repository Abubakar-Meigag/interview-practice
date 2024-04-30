// Given a string s containing just the characters '(', ')', determine if the input string is valid.
// 		- An input string is valid if: Open brackets must always be closed. Every close bracket has a corresponding open bracket.
// 		- Example 1: Input: s = "()" Output: true
// 		- Example 2: Input: s = ")(" Output: false
// 		- Example 3: Input: s = "(())" Output: true
// 		- Example 4: Input: s = "()(()" Output: false

// Test with `npm test -- simple-brackets.test.js`

function isBalanced(str) {
  if (str === "") {
    return true;
  }

  let counter = 0;

  if (str != "") {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        counter ++;
      } else if (str[i] === ")") {
        counter --;

        if (counter < 0) {
          return false;
        }
      }
    }
  }

  return counter === 0;
}
module.exports = isBalanced;

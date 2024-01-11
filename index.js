function isPalindrome(word) {
  const reversedWord = reverseString(word)
  return word === reversedWord;
}
  function reverseString(word){
    return word.split("").reverse().join("");
  }

  // Write your algorithm here
/*input: receives a string as input
  output: return 'true' if the string is a palindrone, else return 'false'
  have a helper function 'reverseString' to take string as input and returns 
  the reversed after comparison with the original input,
  if same return, 'true', otherwise return 'false'.
*/

/* 
  Pseudocode 
  function reverseString(word):
return word.split("").reverse().join("")

function isPalindrome(word):
set reversedWord = reverseString(word)
return word === reversedWord
*/

/*
  Add written explanation of your solution here
  The algorithm allows to check for palindromes by comparing the original string with its 
  reversed version. The helper function reverseString is used to handle the reversal process. 
  the main function 'isPalindrome' compares the original and reverse then returns 'true' is same and false is not. 
  pseudocode employs common string manipulation methods in a clear and concise manner, contributing to the algorithm's readability.   */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
console.log(isPalindrome ('abba'));
console.log(isPalindrome ('robot'));
console.log(isPalindrome ('ab'));
console.log(isPalindrome ('a'));
console.log(isPalindrome ('racecar'));
console.log(isPalindrome ('juma'));
console.log(isPalindrome ('T'));
console.log(isPalindrome ('ab23'));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(word) {
  // Write your algorithm here
  let length = word.length
  if (length === 1) {
    return true
  } else if (word[0] === word[-1]) {
    return isPalindrome(word.slice(1, length-1))
  }
  return false
}

/* 
  Add your pseudocode here
  function palindrome(word){
    define length = word.length
    use if (length === 1){
      return true
    } else if (word[0] === word[-1]){
      return palindrome(word.slice(1, length-1))
    }
  }

*/

/*
  Add written explanation of your solution here
  -if the length of the word is 1 letter: the it's a palindrome
  -next, check whether the first letter is the same as the last letter
  -then slice the word and check again until completion
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

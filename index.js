function isPalindrome(word) {
  //write your algorithmn here
 const newWord = word.split('');
 const wordinverse = [];
 for (const letter of newWord) {
    wordinverse.unshift(letter);
 }
 const reversedWord = wordinverse.join('');

 if (word === reversedWord) {
    return true;
 } else {
    return false;
 }

}

/* 
  Add your pseudocode here
  The method split will be used to separate the characters in the string.
  After initializing with a blank array, cycle over the string's output array, letter by letter, using a for of loop. Using unshift, add each component such that the first occurrence of each letter is at the beginning.
  Join can be used to convert the array to a string, which can then be compared to itself using the deep equality operator to determine if the two strings are identical.
*/


/*
  Add written explanation of your solution here
  At the start of my function, I convert the string into a sequence of tokens.
 The string's characters are then copied into a new array in alphabetical order.
 Concatenating the elements of this array together yields the opposite of the original string. We can tell whether the word is a palindrome by looking at it now that we have it written backwards.  
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

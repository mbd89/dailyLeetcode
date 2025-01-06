
/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

*/
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  s = s.toLowerCase()
let countA = 0, countB = 0
let vow = ['a','e','i','o','u']
let half = s.length/2
let a = s.slice(0,half)
let b = s.slice(half,s.length)
for(let i =0;i<a.length;i++){
if(vow.includes(a[i]))countA++
if(vow.includes(b[i]))countB++
}
return (countA ===  countB)
};


 
  
  
/* 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 
*/
/**
*/
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let count = 0
let left = 0, right = 0
while(right<t.length){
if(s[left] === t[right]){
count++
left++ 
right++ 
} else{
right++
}

//right++
}if(count === s.length)return true
else return false 
};




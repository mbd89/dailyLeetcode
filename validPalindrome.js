/*
/*
125. Valid Palindrome
Solved
Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

var isPalindrome = function(s) {
  s =s.replace(/[^\p{L}\p{N}\s]/gu, '');
s = s.replaceAll(' ', '').toLowerCase()

let str = ''
for(let i =s.length-1;i>=0;i--){
str+=s[i]
}
if(str === s){
return (true)
} else{
return (false)
}
};


/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

*/



var findMaxConsecutiveOnes = function(nums) {
  let count =0;
let arr = [];
for (let i=0;i<nums.length;i++){
if(nums[i] === 1){
count++
if(i === nums.length-1){
arr.push(count)
}
} 
if(nums[i] === 0){
arr.push(count)
count = 0;
}

}
return (Math.max( ...arr ))
};

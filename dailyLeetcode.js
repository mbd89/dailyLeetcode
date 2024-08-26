/*
/*
DifferenceOfSums
 Input: n = 10, m = 3
- Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
- Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
We return 37 - 18 = 19 as the answer.
*/

var differenceOfSums = function(n, m) {
  let num1 = 0;
  let num2 = 0;
  for(let i =n;i>0;i--){
  if(i%m !== 0){
  num1+=i
  }
  if(i%m === 0){
  num2+=i
  }
  }
  return num1 - num2
};


/*
771. Jewels and Stones
Easy

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
*/

var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  for (let i =0;i<jewels.length;i++){
  for (let j =0;j<stones.length; j++){
   if(jewels[i] === stones[j]){
   count++
   }
  }
  }
  return count
};

/*
2798. Number of Employees Who Met the Target
Solved
Easy

There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

The company requires each employee to work for at least target hours.

You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

Return the integer denoting the number of employees who worked at least target hours.
Example 1:

Input: hours = [0,1,2,3,4], target = 2
Output: 3
Explanation: The company wants each employee to work for at least 2 hours.
- Employee 0 worked for 0 hours and didn't meet the target.
- Employee 1 worked for 1 hours and didn't meet the target.
- Employee 2 worked for 2 hours and met the target.
- Employee 3 worked for 3 hours and met the target.
- Employee 4 worked for 4 hours and met the target.
There are 3 employees who met the target.
Example 2:

Input: hours = [5,1,4,2,2], target = 6
Output: 0
Explanation: The company wants each employee to work for at least 6 hours.
There are 0 employees who met the target
*/

var numberOfEmployeesWhoMetTarget = function(hours, target) {
  let count = 0;
     for (let i =0;i<hours.length;i++){
     if(hours[i]>=target){
     count++
     }
     }
     return count
  };
  
  
/*
Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
Example 2:

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
Example 3:

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
*/ 
  
  
let candies = [4,2,1,1,2], extraCandies = 1
let maxNum = 0;
for (let i = 0;i<candies.length;i++){
if(candies[i] > maxNum){
maxNum = candies[i]
}
}
//candies = candies.sort((a,b)=>a-b)
// console.log(candies[candies.length-1])
candies = candies.map(x=>x+extraCandies >= maxNum ? true : false  )
console.log(candies)
  


/*
1920. Build Array from Permutation
Solved
Easy

Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

Example 1:

Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
Example 2:

Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
*/ 


var buildArray = function(nums) {
  let ans = [];
for(let i =0;i<nums.length; i++){
ans.push(nums[nums[i]])
}
return ans
};


/////////////////////////////////////////////////////////////


/*
Input: nums = [2,11,10,1,3], k = 10
Output: 3
Explanation: After one operation, nums becomes equal to [2, 11, 10, 3].
After two operations, nums becomes equal to [11, 10, 3].
After three operations, nums becomes equal to [11, 10].
At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
It can be shown that 3 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.
Example 2:

Input: nums = [1,1,2,4,9], k = 1
Output: 0
Explanation: All elements of the array are greater than or equal to 1 so we do not need to apply any operations on nums.
Example 3:

Input: nums = [1,1,2,4,9], k = 9
Output: 4
Explanation: only a single element of nums is greater than or equal to 9 so we need to apply the operations 4 times on nums.
*/ 

let nums = [2,11,10,1,3], k = 10
//Output: 3
let count = 0;
for (let i =0;i<nums.length;i++){
if (nums[i]<k){
count++
}
}
console.log(count)

/*
1662. Check If Two String Arrays are Equivalent
Solved
Easy
Topics
Companies
Hint
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true

*/ 

let word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]

let str1 = "";
let str2 = "";
for(let i=0;i<word1.length;i++){
str1+=word1[i]
}
for(let i=0;i<word2.length;i++){
str2+=word2[i]
}

if(str1 === str2){
console.log(true)
} else {
console.log(false)
}

/*
1816. Truncate Sentence
Solved
Easy
Topics
Companies
Hint
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

 

Example 1:

Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
Example 2:

Input: s = "What is the solution to this problem", k = 4
Output: "What is the solution"
Explanation:
The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
The first 4 words are ["What", "is", "the", "solution"].
Hence, you should return "What is the solution".

*/


let s = "Hello how are you Contestant"; k = 4
//Output: "Hello how are you"
let truncated = '';
s = s.split(' ')
for(let i =0;i<k;i++){
truncated+=(s[i]+ ' ')
}
console.log(truncated.trim())


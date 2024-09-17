
/*
3289. The Two Sneaky Numbers of Digitville
Solved
Easy
Companies
Hint
In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

 

Example 1:

Input: nums = [0,1,1,0]

Output: [0,1]

Explanation:

The numbers 0 and 1 each appear twice in the array.

Example 2:

Input: nums = [0,3,2,1,3,2]

Output: [2,3]

Explanation:

The numbers 2 and 3 each appear twice in the array.

Example 3:

Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]

Output: [4,5]

Explanation:

The numbers 4 and 5 each appear twice in the array.
*/




var getSneakyNumbers = function(nums) {
  let unique = []
let newArr = []

for(let i= 0;i<nums.length; i++){
  for(let j = 0;j<nums.length;j++){
      if(i != j){
        if(nums[i] === nums[j]){
         newArr.push(nums[i]) 
        }
      
      }
}
}
 for(let i in newArr){
  if(!unique.includes(newArr[i])){
    unique.push(newArr[i])
  }
}
 return unique  
};


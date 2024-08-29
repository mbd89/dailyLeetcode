



var findLengthOfLCIS = function(nums) {
  if(nums.length === 1){
return nums
}
let count =1;
let arr = [];
for (let i=0;i<nums.length;i++){
if(nums[i+1] > nums[i]) {
count++

if (i+1 === nums.length-1) {
arr.push(count)
}

}
if(nums[i+1] <= nums[i]){
arr.push(count)
count = 1;
}
}

return (Math.max(...arr))
};

/*
Given an array nums of integers, return how many of them contain an even number of digits.

 

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits
*/

var findNumbers = function(nums) {
  let newArr  = []
  let count = 0;
  for (let i =0;i<nums.length;i++){
  newArr.push(nums[i].toString())
  }
  
  let answers = (newArr.map(x=>x.length%2 === 0 ? true : false))
  for(answer of answers){
  if(answer === true){
  count++
  }
  }
  return (count)
  };


/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 */

  var sortedSquares = function(nums) {
    nums = nums.map(x=>x*x)
    return(nums.sort((a,b)=>a-b))
    };



/**
 Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
  */

    var removeElement = function(nums, val) {
      let count = 0
      for(let i= 0;i<nums.length;i++){
      if(nums[i] === val){
      delete nums[i]
      }
      if(nums[i] !== undefined){
      count++
      }
      }
      nums = nums.sort((a,b)=>a-b)
      return (count)
      };
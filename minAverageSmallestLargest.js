
/*
You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

You repeat the following procedure n / 2 times:

Remove the smallest element, minElement, and the largest element maxElement, from nums.
Add (minElement + maxElement) / 2 to averages.
Return the minimum element in averages.

*/
 



var minimumAverage = function(nums) {
  let averages = []
  nums = nums.sort((a,b)=>a-b)
  let left = 0, right = nums.length-1
  while (left < right){
    let minElement = nums[left], maxElement = nums[right]
  averages.push((minElement + maxElement)/2 )
  left++ 
  right-- 
  }return Math.min(...averages)

  
};
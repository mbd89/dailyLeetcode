/**
 * 
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var isMonotonic = function(nums) {
    count1 = 0 
    count2=0
    for(let i=0;i<nums.length;i++){
      if(nums[i]<=nums[i+1]){
          count1++
          if(count1===nums.length-1){
              return true
          }
      }
    }
  
     for(let i=0;i<nums.length;i++){
      if(nums[i]>=nums[i+1]){
          count2++
          if(count2===nums.length-1){
              return true
          }
      }
      
    }
    return (nums.length==1)?true:false 
  };

  


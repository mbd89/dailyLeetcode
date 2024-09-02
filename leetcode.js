/**
 * 
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true

 */

var validMountainArray = function(arr) {
  let count1 = 1;
  let count2 = 0;
  let newArr= [];
  let newArr2 = [];
     if(arr.length >= 3){
      if(arr[1] > arr[0] && arr[arr.length-2] > arr[arr.length-1]){ 
     for(let i = 0;i<arr.length;i++){ 
  
          if(arr[i+1] > arr[i]){
           count1++
          newArr.push(arr[i+1])
  } 
   
      
     }
     for(let j = arr.length-1;j >=0; j--){
  
    if(arr[j-1] > arr[j]){
    count2++
    newArr2.push(arr[j-1])
  
    }
  
     }
  if(count2 + count1 === arr.length){
     if (newArr[newArr.length-1] === newArr2[newArr2.length-1]){
      return true
     }
  }
   
     }
    } return false
  
  };
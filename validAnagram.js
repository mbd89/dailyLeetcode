
/*
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

*/  
 

var isAnagram = function(s, t) {
  if(s.length !== t.length){
  return false
  }
  let frequencyCounter= {}
  let frequencyCounter2 = {}
  
  for(let val of s){
   if(frequencyCounter[val]){
   frequencyCounter[val]++
   } else{
    frequencyCounter[val] = 1
   }
  }
  
  for(let val of t){
    if(frequencyCounter2[val]){
   frequencyCounter2[val]++
   } else{
    frequencyCounter2[val] = 1
   }
  }
  
  for(const [key, value] of Object.entries(frequencyCounter2)){
  if(frequencyCounter[key] !== frequencyCounter2[key] ){
  return false
  }
  } 
  return true
  };
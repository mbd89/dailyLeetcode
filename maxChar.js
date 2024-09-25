
/*
Given a string, return the character that is most used in the string 

Example maxChar('aaabbbccccccc') === 'c'
*/







function maxChar(str){
  const charMap = {}
  for(let i =0;i<str.length;i++){
  const char = str[i]
  if(charMap[char]){
  charMap[char]++
  } else{
  charMap[char] = 1
  }
  }
  const values = Object.keys(charMap)
  let max = 0;
  let maxChar = ''
  for(let i = 0;i<values.length;i++){
  
  if(max < charMap[values[i]]){
  max = charMap[values[i]]
  maxChar = values[i]
  }
  }
  return maxChar
  }
 
 
/* 
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

 

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".
Example 2:

Input: command = "G()()()()(al)"
Output: "Gooooal"
Example 3:

Input: command = "(al)G(al)()()G"
Output: "alGalooG"
 
*/
/**
 * @param {number} x
 * @return {boolean}
 */
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(str) {
    str = str.split('')
 for(let i = 0;i<str.length;i++){
  //str = str[i].replace("()", 'o')
//str[i] = str[i].replace('G', 'KOL')
if(str[i] === "(" && str[i+1] === ")" ){ 
//console.log('ercd')
delete str[i+1]
str[i] = str[i].replace('(', 'o')
} 
if(str[i] === "(" && str[i+1] === 'a' && str[i+2] === 'l' && str[i+3] === ')' ){
//console.log('remove parentheses here too')
str[i] = str[i].replace('(', '')
str[i+3] = str[i+3].replace(')', '')
} 

 } return str.join('')
};

  


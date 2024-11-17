/* 
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 
*/
/**
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let str = '';
for( let i = 33; i <= 64; i++ )
{
    str += String.fromCharCode(i);
}
let jkl = '[`_^\]'
str+=jkl 

let left = 0, right = s.length-1
s =s.split('')
while(left<right){
if(str.includes(s[left]) ) left++ 
if(str.includes(s[right])) right-- 
if(!str.includes(s[left]) && !str.includes(s[right])) { 
let temp = s[right]
s[right] = s[left]
s[left] = temp
left++ 
right--
}
}   
return s.join('')
};




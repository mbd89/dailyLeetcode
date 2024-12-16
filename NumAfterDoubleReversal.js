/* 
Reversing an integer means to reverse all its digits.

For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

 

Example 1:

Input: num = 526
Output: true
Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
Example 2:

Input: num = 1800
Output: false
Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
Example 3:

Input: num = 0
Output: true
Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.


Runtime
0
ms
Beats
100.00%

*/


/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num<10)return true 
let count = 0
let num1 = num 
num = num.toString().split('').reverse()
for(let i =0;i<num.length;i++){
if(num[i]=== '0')count++
else{
    break
}
} 
num.splice(0,count)

return Number(num.reverse().join('')) === num1 
};

/**/ 



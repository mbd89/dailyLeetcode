/**
2652. Sum Multiples
Solved
Easy
Topics
Companies
Hint
Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

 

Example 1:

Input: n = 7
Output: 21
Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.
Example 2:

Input: n = 10
Output: 40
Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.


*/

var sumOfMultiples = function(n) {
    let count = 0;
for(let i =0;i<=n;i++){
if(i % 3=== 0 ||  i%5 === 0 ||  i%7 === 0){

count+=i
}
}
return (count)
};


   

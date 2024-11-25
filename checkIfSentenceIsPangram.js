/* 
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var sortSentence = function(s) {
    let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    s =s.split('')
    s =  s.sort() 
    let unique = []
    for(let i =0;i<s.length;i++){
    if(!unique.includes(s[i]))unique.push(s[i])
    }
    return alph.join('') === unique.join('')
    
    };
   

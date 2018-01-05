/* 

Problem Title: Taum and B'day
Problem Url: https://www.hackerrank.com/challenges/taum-and-bday
Time Complexity: O(1)
Space Complexity: O(1)

*/


function taumBday(b, w, bc, wc, z) {
    return BigInt(b) * BigInt(Math.min(bc, wc + z)) + BigInt(w) * BigInt(Math.min(wc, bc + z));
}
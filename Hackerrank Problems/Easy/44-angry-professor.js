/* 

Problem Title: Angry Professor
Problem Url: https://www.hackerrank.com/challenges/angry-professor
// Time Complexity: O(n)
// Space Complexity: O(1)

*/

function angryProfessor(k, a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) count++;
    }
    return count >= k ? "NO" : "YES";
}
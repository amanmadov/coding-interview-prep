/* 

Problem Title: Fair Rations
Problem Url: https://www.hackerrank.com/challenges/fair-rations
Time Complexity: O(n)
Space Complexity: O(1)

*/

function fairRations(B) {
    let count = 0;
    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 !== 0) {
            B[i]++;
            B[i + 1]++;
            count += 2;
        }
    }
    return B[B.length - 1] % 2 === 0 ? count : "NO";
}
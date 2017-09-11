// Problem Title: Number Line Jumps
// Problem Url: https://www.hackerrank.com/challenges/kangaroo/problem
// Time Complexity: O(1)
// Space Complexity: O(1)

function kangaroo(x1, v1, x2, v2) {
    let n = (x1-x2)/(v2-v1);
    return (Number.isInteger(n) && n>= 0) ? 'YES' : 'NO';
}
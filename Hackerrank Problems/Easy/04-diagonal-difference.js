// Problem Title: Diagonal Difference
// Problem Url: https://www.hackerrank.com/challenges/diagonal-difference/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function diagonalDifference(arr) {
    const length = arr.length;
    let d1 = 0;
    let d2 = 0;
    for (let i = 0; i < length; i++) {
        d1 += arr[i][i];
        d2 += arr[length - 1 - i][i]
    }
    return Math.abs(d1 - d2);
}

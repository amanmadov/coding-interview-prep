// Problem Title: A Very Big Sum
// Problem Url: https://www.hackerrank.com/challenges/a-very-big-sum/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function aVeryBigSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
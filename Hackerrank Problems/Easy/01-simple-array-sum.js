// Problem Title: Simple Array Sum
// Problem Url: https://www.hackerrank.com/challenges/simple-array-sum/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function simpleArraySum(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

// Problem Title: Electronics Shop
// Problem Url: https://www.hackerrank.com/challenges/electronics-shop/problem
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for (let i = 0; i < keyboards.length; i++) {
        let temp = 0;
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b) {
                temp = keyboards[i] + drives[j];
                max = temp > max ? temp : max;
            }
        }
    }
    return max;
}
// Problem Title: Divisible Sum Pairs
// Problem Url: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < n; i++) 
        for (let j = i + 1; j < n; j++) 
            if ((ar[i] + ar[j]) % k === 0) count++;
    return count;
}
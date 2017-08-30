// Problem Title: Staircase
// Problem Url: https://www.hackerrank.com/challenges/staircase/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i))
    }
}
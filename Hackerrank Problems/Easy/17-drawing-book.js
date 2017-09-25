// Problem Title: Drawing Book
// Problem Url: https://www.hackerrank.com/challenges/drawing-book/problem
// Time Complexity: O(1)
// Space Complexity: O(1)

function pageCount(n, p) {
    let f = Math.floor(p / 2);
    let b = Math.floor((n / 2) - f);
    return Math.min(f, b);
}
// Problem Title: Halloween Sale
// Problem Url: https://www.hackerrank.com/challenges/halloween-sale/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function howManyGames(p, d, m, s) {
    let count = 0;
    while (s >= p) {
        count++;
        s = s - p;
        p = Math.max(p - d, m);
    }
    return count;
}
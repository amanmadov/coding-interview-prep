// Problem Title: Repeated String
// Problem Url: https://www.hackerrank.com/challenges/repeated-string/problem
// Time Complexity: O(n)
// Space Complexity: O(n)

function repeatedString(s, n) {
    let occurances = (s.split("a").length - 1);
    let max = Math.floor(n / s.length);
    let total = occurances * max;
    total += (s.slice(0, n % s.length).split("a").length - 1);
    return total;
}
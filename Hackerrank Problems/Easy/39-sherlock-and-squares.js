// Problem Title: Sherlock and Squares
// Problem Url: https://www.hackerrank.com/challenges/sherlock-and-squares/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function squares(a, b) {
    let square = 0;
    let i = 1;
    let count = 0;
    while (square <= b) {
        square = i * i;
        if (square >= a && square <= b) count++;
        i++;
    }
    return count;
}
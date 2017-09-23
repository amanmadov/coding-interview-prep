// Problem Title: Subarray Division
// Problem Url: https://www.hackerrank.com/challenges/the-birthday-bar/problem
// Time Complexity: O(n)
// Space Complexity: O(n)

function birthday(s, d, m) {
    const sum = [0];
    let count = 0;

    for (let i = 0; i < s.length; i++)
        sum[i + 1] = sum[i] + s[i];

    for (let i = 0; i <= s.length - m; i++) 
        if (sum[i + m] - sum[i] == d) count++;

    return count;
}

console.log(birthday([1,2,1,3,2],3,2));



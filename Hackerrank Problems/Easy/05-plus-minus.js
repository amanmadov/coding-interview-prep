// Problem Title: Plus Minus
// Problem Url: https://www.hackerrank.com/challenges/plus-minus/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function plusMinus(arr) {
    let p = 0;
    let n = 0;
    let z = 0;
    const len = arr.length || 0;

    if (len > 0 && len <= 100) {
        for (const num of arr)
            num > 0 ? p++ : (num === 0 ? z++ : n++);
    }
    
    console.log((p / len) || 0);
    console.log((n / len) || 0);
    console.log((z / len) || 0);
}
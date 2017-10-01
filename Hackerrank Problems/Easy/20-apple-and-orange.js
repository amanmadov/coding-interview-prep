// Problem Title: Apple and Orange
// Problem Url: https://www.hackerrank.com/challenges/apple-and-orange/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let aCount = 0;
    let oCount = 0;
    for (let i = 0; i < apples.length; i++) 
        if (a + apples[i] >= s && a + apples[i] <= t) aCount++;        

    for (let j = 0; j < oranges.length; j++) 
        if (b + oranges[j] <= t && b + oranges[j] >= s) oCount++;

    console.log(aCount);
    console.log(oCount);
}
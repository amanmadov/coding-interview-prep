// Problem Title: The Hurdle Race
// Problem Url: https://www.hackerrank.com/challenges/the-hurdle-race/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function hurdleRace(k, height) {
    let maxCount = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > k) {
            let diff = height[i] - k;
            if (diff > maxCount) maxCount = diff;
        }
    }
    return (maxCount === 0) ? 0 : maxCount;
}
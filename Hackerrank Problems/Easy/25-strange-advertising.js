// Problem Title: Viral Advertising
// Problem Url: https://www.hackerrank.com/challenges/strange-advertising/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function viralAdvertising(n) {
    let shared = 5;
    let cumulative = 0;
    let liked = 0;
    for (let i = 1; i <= n; i++) {
        liked = Math.floor(shared / 2);
        cumulative += liked;
        shared = liked * 3;
    }
    return cumulative;
}
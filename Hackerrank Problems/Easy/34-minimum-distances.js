// Problem Title: Minimum Distances
// Problem Url: https://www.hackerrank.com/challenges/minimum-distances/problem
// Time Complexity: O(n)
// Space Complexity: O(n)

function minimumDistances(a) {
    let min = Number.MAX_SAFE_INTEGER;
    let m = new Map();
    for (let i = 0; i < a.length; i++) {
        if (m.has(a[i])) {
            let diff = (i - (m.get(a[i]) - 1));
            if (diff < min) min = diff;
        }
        m.set(a[i], i + 1);
    }
    return min == Number.MAX_SAFE_INTEGER ? -1 : min;
}
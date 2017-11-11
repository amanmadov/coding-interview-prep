// Problem Title: Equalize the Array
// Problem Url: https://www.hackerrank.com/challenges/equality-in-a-array/problem
// Time Complexity: O(n)
// Space Complexity: O(n)

function equalizeArray(arr) {
    let m = new Map();
    let maxCount = 0;

    for (let num of arr) {
        m.has(num) ? m.set(num, m.get(num) + 1) : m.set(num, 1);
    }

    for (let [key, value] of m) {
        if(m.get(key) > maxCount) maxCount = m.get(key);
    }

    return arr.length - maxCount;
}
// Problem Title: Append and Delete
// Problem Url: https://www.hackerrank.com/challenges/append-and-delete/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function appendAndDelete(s, t, k) {
    let sList = s.split("");
    let tList = t.split("");
    let count = 0;
    for (let i = 0; i === count && i < s.length; i++) {
        if (sList[i] === tList[i]) count++;
    }

    let tCount = t.length - count;
    let sCount = s.length - count;
    let f = k - (tCount + sCount);

    if (tCount + sCount < k && t.length + s.length > k && f % 2 !== 0) return "No";
    return (tCount + sCount <= k) ? "Yes" : "No";
}
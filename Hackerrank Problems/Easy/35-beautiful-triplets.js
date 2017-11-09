// Problem Title: Beautiful Triplets
// Problem Url: https://www.hackerrank.com/challenges/beautiful-triplets/problem
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function beautifulTriplets(d, arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d * 2)) result++;
    }
    return result;
}
// Problem Title: Two Number Sum
// Problem Url: https://www.algoexpert.io/questions/two-number-sum
// Time Complexity: O(n)
// Space Complexity: O(1)

function twoNumberSum(array, targetSum) {
    let mySet = new Set();
    for (let num of array) {
        let diff = targetSum - num;
        if (mySet.has(diff)) return [num, diff];
        else mySet.add(num);
    }
    return [];
}
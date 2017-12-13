/* 

Problem Title: Picking Numbers
Problem Url: https://www.hackerrank.com/challenges/picking-numbers
// Time Complexity: O(n)
// Space Complexity: O(n)

*/


function pickingNumbers(a) {
    let sortedList = a.sort((a, b) => a - b);
    let currentList = [];
    let longestLength = 0;
    let startNumber = 0;
    for (let i = 0; i < sortedList.length; i++) {
        let result = Math.abs(sortedList[startNumber] - sortedList[i]);
        if (result < 2) {
            currentList.push(sortedList[i]);
            if (currentList.length > longestLength) longestLength = currentList.length;
        } else {
            startNumber = i;
            if (currentList.length > longestLength) longestLength = currentList.length;
            currentList = [];
            currentList.push(sortedList[i]);
        }
    }
    return longestLength;
}
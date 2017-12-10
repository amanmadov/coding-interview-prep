/* 

Problem Title: Circular Array Rotation
Problem Url: https://www.hackerrank.com/challenges/circular-array-rotation
// Time Complexity: O(n)
// Space Complexity: O(n)

*/

function circularArrayRotation(arr, k, queries) {
    const rotatedList = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        rotatedList[(i + k) % arr.length] = arr[i];
    }
    
    const resultList = [];
    for (let j of queries) {
        resultList.push(rotatedList[j]);
    }
    
    return resultList;
}
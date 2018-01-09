/* 

Problem Title: Cut the sticks
Problem Url: https://www.hackerrank.com/challenges/cut-the-sticks
Time Complexity: O(nlogn)
Space Complexity: O(n)

*/


function cutTheSticks(arr) {
    arr.sort((a, b) => a - b);
    const output = [arr.length];
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            output.push(arr.length - j);
            i = j;
        }
    }

    return output;
}

// Problem Title: Counting Valleys
// Problem Url: https://www.hackerrank.com/challenges/counting-valleys/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function countingValleys(steps, path) {
    let stepList = path.split('');
    let count = 0;
    let result = 0;
    for (let step = 0; step < steps; step++) {
        let isDownhill = stepList[step].toLowerCase() === 'd';
        if (count === 0 && isDownhill) {
            count--;
            result++;
        } 
        else if (isDownhill) count--;
        else count++;
    }
    return result;
}
// Problem Title: Mini-Max Sum
// Problem Url: https://www.hackerrank.com/challenges/mini-max-sum/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;
    let sum = 0;
    let min = arr[0];
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){
      if(arr[i] > max) max = arr[i];
      if(arr[i] < min) min = arr[i];
      sum += arr[i];
    }

    minSum = sum - max;
    maxSum = sum - min;
    console.log(minSum, maxSum);
}
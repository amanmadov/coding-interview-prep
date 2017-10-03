// Problem Title: Quicksort 1 - Partition
// Problem Url: https://www.hackerrank.com/challenges/quicksort1/problem
// Time Complexity: O(n)
// Space Complexity: O(n)

function quickSort(arr) {
    const l = []:
    const r = []:
    const pivot = arr[0];

    for (let i = 1; i < arr.length; i++) 
        (arr[i] < pivot) ? l.push(arr[i]) : r.push(arr[i]);
    
    return l.concat([pivot]).concat(r);
}
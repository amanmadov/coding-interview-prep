// Problem Title: Validate Subsequence
// Problem Url: https://www.algoexpert.io/questions/validate-subsequence
// Time Complexity: O(n)
// Space Complexity: O(1)

function isValidSubsequence(array, sequence) {
    let seqIndex = 0;
    for (const num of array) {
        if(num === sequence[seqIndex]) seqIndex++;
    }   
    return seqIndex === sequence.length;
}
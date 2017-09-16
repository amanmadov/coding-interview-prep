// Problem Title: Number Line Jumps
// Problem Url: https://www.hackerrank.com/challenges/kangaroo/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function breakingRecords(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let minRecord = 0;
    let maxRecord = 0;

    for (const score of scores) {
        if (score > maxScore) {
            maxScore = score;
            maxRecord++;
        }
        if (score < minScore) {
            minScore = score;
            minRecord++;
        }
    }
    return [maxRecord, minRecord];
}
/* 

Problem Title: Lisa's Workbook
Problem Url: https://www.hackerrank.com/challenges/lisa-workbook
Time Complexity: O(n2)
Space Complexity: O(n)

*/


function workbook(n, k, arr) {
    let result = 0;
    let page = 1;
    for (let i = 0; i < arr.length; i++) {
        let problemsChapter = arr[i];
        let pagesChapter = Math.ceil(problemsChapter / k);
        for (let j = 1; j <= pagesChapter; j++) {
            let startProblem = (j - 1) * k + 1;
            let endProblem = Math.min(j * k, problemsChapter);
            if (page >= startProblem && page <= endProblem) {
                result++;
            }
            page++;
        }
    }
    return result;
}

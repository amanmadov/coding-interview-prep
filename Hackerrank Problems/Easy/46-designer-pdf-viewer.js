/* 

Problem Title: Designer PDF Viewer
Problem Url: https://www.hackerrank.com/challenges/designer-pdf-viewer
// Time Complexity: O(n)
// Space Complexity: O(n)

*/


function designerPdfViewer(h, word) {
    const wList = [];
    let maxValue = 0;

    const getLetterIndex = char => char.toLowerCase().charCodeAt(0) - 97;

    for (let i = 0; i < word.length; i++) {
        wList.push(h[getLetterIndex(word[i])]);
    }

    maxValue = Math.max(...wList);
    return word.length * maxValue;
}
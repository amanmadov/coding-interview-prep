/* 

Problem Title: Sequence Equation
Problem Url: https://www.hackerrank.com/challenges/permutation-equation
// Time Complexity: O(n)
// Space Complexity: O(n)

*/

function permutationEquation(p) {
    const indexList = [];
    const resultList = [];
    let temp;

    for (let i = 0; i < p.length; i++) {
        indexList[p[i]] = i + 1;
    }

    for (let j = 1; j <= p.length; j++) {
        temp = indexList[j];
        resultList.push(indexList[temp]);
    }
    
    return resultList;
}
// Problem Title: Service Lane
// Problem Url: https://www.hackerrank.com/challenges/service-lane/problem
// Time Complexity: O(n^2)
// Space Complexity: O(n)

function serviceLane(n, cases) {
    const result = [];
    for (let c of cases) {
        const sliced = n.slice(c[0], c[1] + 1);
        const min = Math.min(...sliced);
        result.push(min);
    }
    return result;
}
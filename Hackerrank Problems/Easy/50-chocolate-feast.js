/* 

Problem Title: Chocolate Feast
Problem Url: https://www.hackerrank.com/challenges/chocolate-feast
Time Complexity: O(n)
Space Complexity: O(1)

*/


function chocolateFeast(n, c, m) {
    let count = Math.floor(n / c);
    let wrappers = count;
    while (wrappers >= m) {
        let freeChocolates = Math.floor(wrappers / m);
        count += freeChocolates;
        wrappers = freeChocolates + (wrappers % m);
    }
    return count;
}

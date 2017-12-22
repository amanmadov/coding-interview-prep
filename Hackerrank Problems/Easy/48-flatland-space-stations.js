/* 

Problem Title: Flatland Space Stations
Problem Url: https://www.hackerrank.com/challenges/flatland-space-stations
Time Complexity: O(nlogn)
Space Complexity: O(1)

*/

function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b);
    let max = Math.max(c[0], n - c[c.length - 1] - 1);
    for (let i = 0; i < c.length - 1; i++) {
        max = Math.max(max, Math.floor((c[i + 1] - c[i]) / 2));
    }
    return max;
}
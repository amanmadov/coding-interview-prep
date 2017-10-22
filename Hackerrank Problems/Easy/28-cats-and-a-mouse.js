// Problem Title: Cats and a Mouse
// Problem Url: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
// Time Complexity: O(1)
// Space Complexity: O(1)

function catAndMouse(x, y, z) {
    let aDiff = Math.abs(z - x);
    let bDiff = Math.abs(z - y);
    if (aDiff == bDiff) return "Mouse C";
    if (aDiff < bDiff) return "Cat A";
    return "Cat B";
}
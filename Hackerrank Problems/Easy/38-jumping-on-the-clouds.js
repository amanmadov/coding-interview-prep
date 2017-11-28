// Problem Title: Jumping on the Clouds
// Problem Url: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
// Time Complexity: O(n)
// Space Complexity: O(n)


function jumpingOnClouds(c) {
    const stepsList = [];
    let i = 0;
    while (i < c.length - 1) {
        if ((i + 2 < c.length) && (c[i + 2] === 0)) {
            stepsList.push(c[i + 2]);
            i += 2;
        } else {
            stepsList.push(c[i + 1]);
            i += 1;
        }
    }
    return stepsList.length;
}
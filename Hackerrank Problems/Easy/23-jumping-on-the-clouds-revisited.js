// Problem Title: Jumping on the Clouds: Revisited
// Problem Url: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function jumpingOnClouds(c, k) {
    let energy = 100;
    let i = 0;

    do {
        energy -= c[i] === 1 ? 3 : 1;
        i = (i + k) % c.length;
    } while (i !== 0);

    return energy;
}
// Problem Title: Save the Prisoner
// Problem Url: https://www.hackerrank.com/challenges/save-the-prisoner/problem
// Time Complexity: O(1)
// Space Complexity: O(1)

function saveThePrisoner(n, m, s) {
    // calculate the remaining candies after distributing `m` candies
    // among `n` prisoners starting from prisoner `s`
    const remainingCandies = m % n;
    // adjust the starting prisoner index to account for the remaining candies
    const startingPrisoner = s + remainingCandies - 1;
    // calculate the last prisoner to whom a candy will be given
    const lastPrisoner = startingPrisoner % n || n;
    // return the index of the last prisoner
    return lastPrisoner;
}
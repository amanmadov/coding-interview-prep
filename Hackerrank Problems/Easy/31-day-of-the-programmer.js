// Problem Title: Day of the Programmer
// Problem Url: https://www.hackerrank.com/challenges/day-of-the-programmer/problem
// Time Complexity: O(1)
// Space Complexity: O(1)

function dayOfProgrammer(year) {
    if (year === 1918) return "26.09.1918";
    if (((year <= 1917) && (year % 4 === 0)) || ((year % 400 === 0) || ((year % 4 === 0) & (year % 100 !== 0)))) return "12.09." + year;
    return "13.09." + year;
}
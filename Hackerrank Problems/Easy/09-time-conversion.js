// Problem Title: Time Conversion
// Problem Url: https://www.hackerrank.com/challenges/time-conversion/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function timeConversion(s) {
    const format = s.substring(s.length - 2);
    let hour = s.substring(0, 2);
    const minusSecond = s.substring(2, 8);
    if (format == "AM") hour = hour == 12 ? '00' : hour;
    if (format == "PM") hour = +hour + 12 < 24 ? +hour + 12 : '12';
    return hour + "" + minusSecond;
}
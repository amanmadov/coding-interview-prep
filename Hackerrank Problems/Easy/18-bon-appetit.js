// Problem Title: Bill Division
// Problem Url: https://www.hackerrank.com/challenges/bon-appetit/problem
// Time Complexity: O(1)
// Space Complexity: O(1)

function bonAppetit(bill, k, b) {
    const total = bill.reduce((a, b) => a + b);
    const r = b - (total - bill[k]) / 2;
    console.log(r !== 0 ? r : 'Bon Appetit');
}
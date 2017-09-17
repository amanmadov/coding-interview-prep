// Problem Title: Sales by Match
// Problem Url: https://www.hackerrank.com/challenges/sock-merchant/problem
// Time Complexity: O(n)
// Space Complexity: O(n)

function sockMerchant(n, ar) {
    let s = new Set();
    let count = 0;
    for(let num of ar){
        if(s.has(num)){
            count++;
            s.delete(num);
        } else {
            s.add(num);
        }
    }
    return count;
}
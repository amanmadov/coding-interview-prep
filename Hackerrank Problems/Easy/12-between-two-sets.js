// Problem Title: Between Two Sets
// Problem Url: https://www.hackerrank.com/challenges/between-two-sets/problem
// Time Complexity: O(1)
// Space Complexity: O(1)

function getTotalX(a, b) {

    let lcm = a[0];
    let gcd = b[0];

    for (const num of a) {
        lcm = getLCM(lcm,num);
    }

    for (const num of b) {
        gcd = getGCD(gcd,num);
    }

    function getGCD(n1, n2) {
        if (n2 === 0) {
            return n1;
        }
        return getGCD(n2, n1 % n2);
    }

    function getLCM(n1, n2) {
        if (n1 === 0 || n2 === 0)
            return 0;
        else {
            let gcd = getGCD(n1, n2);
            return Math.abs(n1 * n2) / gcd;
        }
    }

    let count = 0;
    let multiple = 0;

    while(multiple <= gcd) {
        multiple =  multiple + lcm;
        if(gcd % multiple === 0){
            count++;
        }
    }
    
    return count;
}
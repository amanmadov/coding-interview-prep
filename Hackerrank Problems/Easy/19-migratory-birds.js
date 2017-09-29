// Problem Title: Migratory Birds
// Problem Url: https://www.hackerrank.com/challenges/migratory-birds/problem
// Time Complexity: O(n)
// Space Complexity: O(n)

function migratoryBirds(arr) {
    const m = new Map();
    
    for(let num of arr){
        if(!m.has(num)) m.set(num,1);
        else m.set(num,m.get(num)+1);
    }
    
    const mostFrequentCount = Math.max(...m.values());
    const mostFrequentBirds = []; 
    
    m.forEach((value, key) => { 
        if(value === mostFrequentCount) mostFrequentBirds.push(key);     
    })
    
    return Math.min(...mostFrequentBirds);
}
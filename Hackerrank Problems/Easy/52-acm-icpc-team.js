/* 

Problem Title: ACM ICPC Team
Problem Url: https://www.hackerrank.com/challenges/acm-icpc-team
Time Complexity: O(n3)
Space Complexity: O(1)

*/

function acmTeam(topic) {
    let max = 0;
    let count = 0;

    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let thisCnt = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    thisCnt++;
                }
            }

            if (thisCnt > max) {
                max = thisCnt;
                count = 1;
            } 
            if (thisCnt === max) {
                count++;
            }
        }
    }

    return [max, count];
}

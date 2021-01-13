// Problem Title: Tournament Winner
// Problem Url: https://www.algoexpert.io/questions/tournament-winner
// Time Complexity: O(n)
// Space Complexity: O(n)

function tournamentWinner(competitions, results) {
    const map = new Map();
    competitions.forEach((el, i) => {
        let winner = competitions[i].at(!results[i]);
        let looser = competitions[i].at(results[i]);
        map.has(winner) ? map.set(winner, map.get(winner) + 3) : map.set(winner, 3);
        map.has(looser) ? map.set(looser, map.get(looser) + 0) : map.set(looser, 0);
    });
    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    return sortedMap.entries().next().value[0];
}
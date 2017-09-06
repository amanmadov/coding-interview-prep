// Problem Title: Birthday Cake Candles
// Problem Url: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// Time Complexity: O(n)
// Space Complexity: O(1)

function birthdayCakeCandles(candles) {
	let maxHeight = Math.max(...candles);
	let count = 0;
	for (var i = 0; i < candles.length; i++) {
		if (candles[i] === maxHeight) count++;
	}
	return count;
}
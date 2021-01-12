// Problem Title: Sorted Squared Array
// Problem Url: https://www.algoexpert.io/questions/sorted-squared-array
// Time Complexity: O(n)
// Space Complexity: O(n)

function sortedSquaredArray(array) {
    const squared = new Array(array.length).fill(0);
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    for (let index = array.length - 1; index >= 0; index--) {
        let small = array[leftIndex];
        let large = array[rightIndex];

        if (Math.abs(small) > Math.abs(large)) {
            squared[index] = small * small;
            leftIndex++;
        } else {
            squared[index] = large * large;
            rightIndex--;
        }
    }

    return squared;
}
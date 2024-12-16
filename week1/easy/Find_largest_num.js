/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr){
    sorted=arr.sort();
    console.log(sorted[arr.length-1])
}

const arr=[3, 7, 2, 9, 1]
findLargestElement(arr)
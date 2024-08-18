function migratoryBirds(arr) {
  // Write your code here
  const birdsMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (birdsMap.has(arr[i])) {
      birdsMap.set(arr[i], birdsMap.get(arr[i]) + 1);
    } else {
      birdsMap.set(arr[i], 1);
    }
  }
  let highBirdId = -1;
  let highestCountBird = 0;
  for (const [key, value] of birdsMap.entries()) {
    if (
      value > highestCountBird ||
      (value === highestCountBird && key < highBirdId)
    ) {
      highestCountBird = value;
      highBirdId = key;
    }
  }
  return highBirdId;
}

const result = migratoryBirds([1, 4, 4, 4, 5, 5, 5, 3]);
const result2 = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);

console.dir("Test Case 0: " + result);
console.dir("Test Case 1: " + result2);

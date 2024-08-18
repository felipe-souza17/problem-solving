function countingValleys(steps, path) {
  // Write your code here
  let count = 0;
  let sea_level = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == "D") {
      count -= 1;
      if (count == -1) sea_level += 1;
    } else {
      if (path[i] == "U") count += 1;
    }
  }
  return sea_level;
}

const result = countingValleys(8, "UDDDUDUU");
console.log(result);

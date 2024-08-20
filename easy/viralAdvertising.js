function viralAdvertising(n) {
  // Write your code here
  let shared = 5;
  let likes = Math.floor(shared / 2);
  let cumulative = likes;
  for (let i = 1; i < n; i++) {
    shared = likes * 3;
    likes = Math.floor(shared / 2);
    cumulative += likes;
  }
  return cumulative;
}

const result = viralAdvertising(3);

console.log(result);

function pageCount(n, p) {
  // Write your code here
  return Math.min(p / 2, n / 2 - p / 2);
}

const result = pageCount(6, 2);
console.log(result);

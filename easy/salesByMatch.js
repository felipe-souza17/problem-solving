function sockMerchant(n, ar) {
  // Write your code here
  let pairsMap = new Map();
  let pairs = 0;
  for (let i = 0; i < ar.length; i++) {
    if (pairsMap.has(ar[i])) {
      pairsMap.set(ar[i], pairsMap.get(ar[i]) + 1);
    } else {
      pairsMap.set(ar[i], 1);
    }
  }
  for (const [key, value] of pairsMap.entries()) {
    if (value > 1) {
      pairs += Math.floor(value / 2);
    }
  }
  return pairs;
}
const result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(result);

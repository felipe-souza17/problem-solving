function designerPdfViewer(h, word) {
  // Write your code here
  let firstLetter = h[0];
  for (let i = 0; i < word.length; i++) {
    if (h[word.charCodeAt(i) - 97] > firstLetter) {
      console.log(h[word.charCodeAt(i) - 97]);
      firstLetter = h[word.charCodeAt(i) - 97];
    }
  }
  return firstLetter * word.length;
}

const result = designerPdfViewer(
  [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  "abc"
);
const result2 = designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
  ],
  "zaba"
);

console.log(result);

console.log(result2);

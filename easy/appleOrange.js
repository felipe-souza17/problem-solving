function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  /*
    2 3
    1 5
    1 1
    -2
    -1
     */
  let appleFalls = 0;
  let orangeFalls = 0;

  for (let i = 0; i < apples.length; i++) {
    let diffApple = a + apples[i];
    if (diffApple >= s && diffApple <= t) {
      appleFalls++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    let diffOrange = b + oranges[i];
    if (diffOrange >= s && diffOrange <= t) {
      orangeFalls++;
    }
  }
  console.log(appleFalls);
  console.log(orangeFalls);
}

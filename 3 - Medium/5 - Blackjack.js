// Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.
// Examples
// overTwentyOne([2, 8, "J"]) ➞ false

// overTwentyOne(["A", "J", "K"]) ➞ false

// overTwentyOne([5, 5, 3, 9]) ➞ true

// overTwentyOne([2, 6, 4, 4, 5]) ➞ false

// overTwentyOne(["J", "Q", "K"]) ➞ true

const overTwentyOne = arr => {
  const faceCard = /[jqk]/i;
  return (
    arr
      .map(char => (faceCard.test(char) ? 10 : char === "A" ? 1 : char))
      .reduce((accum, current) => accum + current) > 21
  );
};

console.log(overTwentyOne([2, 8, "J"]));

console.log(overTwentyOne(["A", "J", "K"]));

console.log(overTwentyOne([5, 5, 3, 9]));

console.log(overTwentyOne([2, 6, 4, 4, 5]));

console.log(overTwentyOne(["J", "Q", "K"]));

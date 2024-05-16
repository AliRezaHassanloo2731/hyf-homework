//fib

function fib(int) {
  let fibo = 0;

  if (int === 1) {
    fibo = 0;
  } else if (int === 2) {
    fibo = 1;
  } else {
    fibo = fib(int - 1) + fib(int - 2);
  }
  return fibo;
}

//*RENDER
// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(6));
// console.log(fib(8));
// console.log(fib(9));
// console.log(fib(10));
// console.log(fib(10000));

//Fizz buzz
function fizzBuzz(n, m) {
  let str = "";
  for (let i = 1; i <= 100; i++) {
    // let r = m / n;
    if (i % n === 0 && i % m === 0) {
      str += " FizzBuzz ";
      str += "\n";
    } else if (i % n === 0) {
      str += " Fizz ";
      str += "\n";
    } else if (i % m === 0) {
      str += " Buzz ";
      str += "\n";
    } else {
      str += i;
    }
  }

  return str;
}
console.log(fizzBuzz(4, 12));

//Build a sentiment analyzer
const positiveWords = [
  "love",
  "hope",
  "joy",
  "gratitude",
  "kindness",
  "optimism",
  "success",
  "inspiration",
  "confidence",
  "harmony",
  "laughter",
  "appreciation",
  "super",
  "awesome",
  "happy",
];
const negativeWords = [
  "unfavorable",
  "adverse",
  "hostile",
  "harmful",
  "detrimental",
  "damaging",
  "destructive",
  "bad",
];
// let myObj = {};

function getSentimentScore(str) {
  /* variable */
  const negative = [];
  const positive = [];
  let score = 0;
  //? logic
  const strArray = str.toLowerCase().split(" ");
  for (let i = 0; i <= strArray.length; i++) {
    if (positiveWords.includes(strArray[i])) {
      score++;
      positive.push(strArray[i]);
    }
    if (negativeWords.includes(strArray[i])) {
      score--;
      negative.push(strArray[i]);
      console.log(score);
    }
  }
  // myObj = { score: score, negative: negative, positive: positive };
  return {
    score,
    positive,
    negative,
  };
}

const sentimentScoreObject = getSentimentScore(
  "I am mega super awesome happy and damaging"
);

console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/
//? 7kyu Vowel Count:
//www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

//? 7kyu Digit*Digit
//www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

//? 7kyu Highest and Lowest

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

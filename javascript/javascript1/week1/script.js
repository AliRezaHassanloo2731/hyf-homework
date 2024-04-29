//Alireza hassanloo
//Age-ify (A future age calculator)

const yearOfBirth = 1979;
const yearFuture = 2037;
const age = yearFuture - yearOfBirth;

//first way
console.log(`I will be ${age} years old in ${yearFuture}`);
//second way
console.log("I will be", age, "years old in", yearFuture);

//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2020;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const dogHumanYear = dogYear * 7;
let shouldShowResultInDogYears;

if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be ",
    dogYear,
    "human years old in ",
    dogYearFuture
  );
} else {
  console.log(
    "Your dog will be ",
    dogHumanYear,
    "human years old in ",
    dogYearFuture
  );
}

//Housey pricey (A house price estimator)

const wideOfHouse = 5;
const deepOfHouse = 11;
const highOfHouse = 8;

const volumeInMeters = wideOfHouse * deepOfHouse * highOfHouse;
const gardenSizeInM2 = 70;
const priceWillPaid = 2_500_000;
const houseRealPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

priceWillPaid < houseRealPrice
  ? console.log("Too Little😉")
  : console.log("Too Much💲😒");

//Ez Namey (Startup name generator) Optional
const firstWords = [
  "Capricious",
  "Exquisite",
  "Equilibrium",
  "Effective",
  "Efficient",
  "Corrosion",
  " Zigzag",
  "Quadrinomial",
  "Trapezoid",
  "Totalitarian",
];
const secondWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Crestfallen",
  "perfect",
  "super",
  "Vermillion",
  "Villainous",
  "Scrupulous",
  "Sabotage",
];
let startupName;
const randomNumber = Math.floor(Math.random() * 10);
startupName = firstWords[randomNumber] + secondWords[randomNumber];
console.log(startupName);

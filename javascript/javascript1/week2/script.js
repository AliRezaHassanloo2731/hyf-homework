"use strict";

//freecodecamp
// *@fcc875e94d0-fbf8-489e-9fc6-e917623ccce2
//link: https://www.freecodecamp.org/fcc875e94d0-fbf8-489e-9fc6-e917623ccce2
// Alireza hassanloo

//Flight booking fullname function and Formal fullname
function getFullname(firstName, lastName, useFormalName, isMan) {
  let fullName;

  if (useFormalName && isMan) {
    fullName = `Lord ${firstName} ${lastName}`;
  } else if (useFormalName && !isMan) {
    fullName = `Lady ${firstName} ${lastName}`;
  } else {
    fullName = `${firstName} ${lastName}`;
  }

  return fullName;
}
// const fullname1 = getFullname("Benjamin", "Hughes", true, true);
// const fullname2 = getFullname("Maria", "Hughes", true, false);
// const fullname3 = getFullname("", "");
// console.log(fullname1, fullname2, fullname3);

//Event application

// ****getDay() returns the day of the week (from 0 to 6) of a date.

const today = new Date();
const numOfThisweek = today.getDay();
const weekdayOfToday = today.toDateString({ weekday: "lang" }).split(" ")[0];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let message;

function getEventWeekday(dayToEvent) {
  message = `Today is ${weekdayOfToday} and and the event is in ${dayToEvent} days. Therefore the event will be held on a ${
    weekDays[(numOfThisweek + dayToEvent) % 7]
  }`;

  return message;
}

console.log(getEventWeekday(2));
console.log(getEventWeekday(21));
//////////////
//Weather wear

function whatWouldWear(tem) {
  let clotheChois;
  if (tem < 5) {
    clotheChois = "polyesters and jacket";
  } else if (tem >= 5 && tem < 15) {
    clotheChois = " Cotton, linen, and rayon";
  } else {
    clotheChois = "shorts and a t-shirt";
  }
  return clotheChois;
}
const clothesToWear = whatWouldWear(12);
console.log(clothesToWear);

//Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
  } else if (class07Students.length < 6 && studentName !== "") {
    class07Students.push(studentName);
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
  } else {
    console.log("Cannot add more students to class 07");
  }
}
// }
addStudentToClass("Ali");
addStudentToClass("Reza");
addStudentToClass("Hassan");
addStudentToClass("Elman");
addStudentToClass("Hassan");
addStudentToClass("Benjamin");
addStudentToClass("jonas");
addStudentToClass("");
addStudentToClass("Queen");
addStudentToClass("Maryam");
console.log(class07Students);
function getNumberOfStudents() {
  // You write code here
  console.log(class07Students.length);
}
getNumberOfStudents();

//Candy helper
//*:candyType - specifies the candy type. Could be 'sweet, chocolate, toffee or chewing-gum'
//*:weight - specifies the weigth of the candy in grams
const priceOfEachCandy = {
  // Candy table prices
  // ?Candy type	Price per gram
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewingGum: 0.03,
};

const boughtCandyPrices = [];
const boughtCandy = [];
function addCandy(candyType, weight) {
  // const x = priceOfEachCandy[candyType];
  // console.log(x);//10,16.5,3.599999999996
  // const y = priceOfEachCandy.candyType;
  // console.log(y);//! undefined
  const price = priceOfEachCandy[candyType] * weight;

  boughtCandyPrices.push(price);
  return price;
}

addCandy("sweet", 20);
addCandy("toffee", 15);
addCandy("chewingGum", 120);

console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;
console.log(amountToSpend);

function canBuyMoreCandy() {
  //? 1.call boughtCandyPrices array and calculate sum of all parameters
  let sum = 0;
  for (let i = 0; i <= boughtCandyPrices.length - 1; i++) {
    sum += boughtCandyPrices[i];
  }

  //? 2.compare with amountToSpend

  const allowBuyMore = sum <= amountToSpend ? true : false;
  boughtCandy.push(allowBuyMore);

  const message = allowBuyMore
    ? console.log("You can buy more, so please do!")
    : console.log("Enough candy for you!");
  //? return boolean array
  return message;
}
canBuyMoreCandy();
console.log(boughtCandy);

//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
// find idx of nemeToRemove
const idxOfNameToRemove = names.indexOf(nameToRemove);
console.log(idxOfNameToRemove);

// remove name
console.log(names.splice(idxOfNameToRemove, 1));

//original array
console.log(names);

//todo :second exercise
//When will we be there??
//data
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
//logic
const arrivalTime = function (speed, distance) {
  const time = (distance / speed) * 60;
  const minutes = Math.floor(time % 60);
  const hours = Math.floor(time / 60);
  let message1;
  if (time >= 1) {
    message1 = `${hours} hours and ${minutes} minutes`;
  } else {
    message1 = `${time} minutes`;
  }
  return message1;
};
//rendering

const travelTime = arrivalTime(
  travelInformation.speed,
  travelInformation.destinationDistance
);
console.log("--------secound exercise");
console.log(travelTime); // 8 hours and 38 minutes

//todo :third exercise
//Series duration of my life

//* DATA
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

//*LOGIC

function lifeDurationHourly(age) {
  let message = "";
  let percentageTotal = 0;

  // entire life hourly
  const lifeByHours = age * 365 * 24;
  for (const el of seriesDurations) {
    // change movie duration by hour
    const moveDurationByHour = el.days * 24 + el.hours;

    // calculate percentage of life by hour
    const percentageOfLife =
      Math.round(
        Number((moveDurationByHour / lifeByHours) * (100).toFixed(3)) * 1000
      ) / 1000;

    percentageTotal += percentageOfLife;

    message += ` ${el.title} took ${percentageOfLife}% of my life`;

    message += "\n";
  }
  message += "\n";
  message += `In total that is ${percentageTotal}% of my life`;

  return message;
}

// function logOutSeriesText() {
// }
//? secound way

//*RENDER
console.log("--------third exercise");
console.log(lifeDurationHourly(80));
// const logOutSeriesText = lifeDurationHourly(80);
// console.log(logOutSeriesText);
//  Game of thrones took 0.01% of my life
// Sopranos took 0.012% of my life
// The Wire took 0.007% of my life

// In total that is 0.2% of my life

//todo :first exercise
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
//* DATA
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
//* LOGIC
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
//* rendering

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
      Math.trunc(
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

//*RENDER

console.log("--------third exercise");
console.log(lifeDurationHourly(80));
// const logOutSeriesText = lifeDurationHourly(80);
// console.log(logOutSeriesText);
//  Game of thrones took 0.01% of my life
// Sopranos took 0.012% of my life
// The Wire took 0.008% of my life

// In total that is 0.3% of my life
//--------------------------------------------------------------
//CactusIO-interactive (Smart phone usage app)
//*DATA

const activities = [];
// let amount = 0;
let numActivitiesForToday = 0;
const limit = 100;
const option = {
  year: "numeric",
  month: "narrow",
  day: "2-digit",
};
const option2 = {
  year: "numeric",
  month: "short",
  day: "2-digit",
};
const dateEvent = new Date("2024,9,12").toLocaleString("en-US", option2);
const today = new Date().toLocaleDateString("fa-IR", option);

//*LOGIC
function addActivity(date, activity, duration) {
  const activitySchedual = {
    date: date,
    activity: activity,
    duration: duration,
  };
  activities.push(activitySchedual);
}
addActivity(dateEvent, "Youtube", 30);
addActivity(today, "chess", 50);
addActivity(today, "instagram", 25);
addActivity(today, "telegram", 15);
console.log("activities=", activities);

function limitation(amount) {
  if (amount > limit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    console.log(
      ` "You have added ${numActivitiesForToday} activities for today. They amount to ${amount} min. of usage"`
    );
  }
}

function calculateLimit() {
  let amount = 0;
  // let numActivitiesForToday = 0;
  for (let i = 0; i <= activities.length - 1; i++) {
    if (activities[i].date === today) {
      amount += activities[i].duration;
      numActivitiesForToday++;
    } else {
      console.log(`${activities[i].activity} is for future`);
    }
  }

  limitation(amount);
}

function findMaxActivityDuration() {
  const durationArray = [];
  activities.map((el) => {
    durationArray.push(el.duration);
  });
  const maxDuration = durationArray.reduce((acc, cur) => {
    return Math.max(acc, cur);
  }, durationArray[0]);
  //print max elemnt's activity
  activities.find((el) => {
    if (el.duration === maxDuration) {
      console.log(
        `${el.activity} is the most time consuming acitivity on phone `
      );
    }
  });
}

function showStatus() {
  if (activities.length === 0) {
    //activity is empty
    console.log("Add some activities before calling showStatus");
  } else {
    calculateLimit();
  }
  findMaxActivityDuration();
}
showStatus(activities); //  "You have added 2 activities. They amount to 90 min. of usage"

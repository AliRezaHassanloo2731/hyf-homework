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
  let message;
  if (time >= 1) {
    message = `${hours} hours and ${minutes} minutes`;
  } else {
    message = `${time} minutes`;
  }
  return message;
};
//rendering

const travelTime = arrivalTime(
  travelInformation.speed,
  travelInformation.destinationDistance
);
console.log(travelTime); // 8 hours and 38 minutes

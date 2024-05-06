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

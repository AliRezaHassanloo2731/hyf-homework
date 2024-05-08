//Lesson
//  todo seperate consepts :1.DATA 2.LOGIC 3.RENDER

//* Data
const user = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};
const user2 = {
  name: "Peter",
  age: 42,
  role: "Teacher",
  classes: ["Maths", "Physics"],
  hobbies: {
    favourite: "Raspberry Pi",
    sports: "Tennis",
  },
};
const users = [user, user2];
const keysToLog = ["name", "age", "role"];
const keysToLog2 = ["name", "age", "hobbies"];
let result = "";
//* LOGIC
function printUsers() {
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < keysToLog.length; j++) {
      result += `${users[i][keysToLog[j]]} `;
    }
    result += "\n";
  }
  return result;
}
const showresult = printUsers();
//* Render
// console.log(showresult);
// function objShow(val) {
//   // console.log(typeof val);
//   const temp = JSON.stringify(val);
//   return temp;

//   for (let i = 0; i < val.length; i++) {}
// }
// objShow();

function printUsers2() {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    for (let j = 0; j < keysToLog2.length; j++) {
      const key = user[keysToLog2[j]];
      // console.log(typeof users[i][keysToLog2[j]]);
      if (typeof key === "string" || typeof key === "nmber") {
        result += `${key} `;
      } else {
        for (let k = 0; k < keysToLog2.length; k++) {
          result += `${key[k]} `;
        }
      }
      result += "\n";
    }
    result += "\n";
  }
  return result;
}
const showResult2 = printUsers2();
console.log(showResult2);
const fruits = ["apple", "banana", "orange"];
// Investigate array methods: pop, push, shift, unshift, includes

// ? without touching the above lines, add "kiwi" to the fruits array
fruits.push("kiwi");

// ? extract "kiwi" from the array and log it out
fruits.pop();
// the fruits array should now be without "kiwi"

// without touching the above lines
//? add dragonfruit and elderberry to the array
fruits.push("dragonfruit");
fruits.unshift("elderberry");

// console.log "Banana in fruit basket" or "No Banana in ..."
// ?whether "banana" is inside of the fruit array
const includeBanana = fruits.includes("Banana")
  ? "Banana in fruit basket"
  : "No Banana in ...";
// console.log(includeBanana);

// ?add strawberry to the begginning of the fruit array
fruits.unshift("strawberry");

// extract strawberry from the fruit array into a variable
const strawberryVar = fruits.shift("strawberry");
// console log the fruit basket and the variable
// console.log(fruits);
// console.log(strawberryVar);

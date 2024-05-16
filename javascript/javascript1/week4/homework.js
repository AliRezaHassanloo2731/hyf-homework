//todo Add one or more command to your voice assistant
// console.log(commandObj.greeting);
const answers = [];
const activities = [];
let firstName = "";
let anwerObj = {};
let activity = "";

//FIND FIRST NAME
function findFirstName(command) {
  firstName += command.split(" ").slice(-1).join();
  return firstName;
}

// GREETING AND NAME
function greetingAnswer(msg) {
  let answer = "";
  findFirstName(msg);
  msg.includes("Hello my name is")
    ? (answer += "nice to meet you" + " " + firstName)
    : (answer +=
        "please use correct syntax: \n Hello my name is: inser your first name here");
  answers.push(firstName);
  anwerObj = { msg: answer };
  answers.push(anwerObj);

  return answer;
}
// console.log(greetingAnswer("Hello my name is benjamin")); //nice to meet you benjamin

//ACTIVITIES
function createActivity(msg) {
  let answer = "";
  activity = msg.substring(msg.indexOf(" "), msg.indexOf("to my todo"));

  if (msg.startsWith("Add")) {
    activities.push(activity);
  } else if (msg === "What is on my todo?") {
    answer = `you have ${activities.length} todos - ${activities.join(
      " and "
    )}`;
  }

  return answer;
}

//REMOVE ACTIVITY
function removeActivity(msg) {
  let answer = "";

  for (const element of activities) {
    activity = msg.substring(msg.indexOf(" "), msg.indexOf("from my todo"));

    if (element === activity) {
      activities.splice(activities.indexOf(element), 1);
    } else {
      answer = `the ${activity} not found`;
    }
  }
  // }
  return answer;
}

//DATE
function getDatOfToday() {
  let msg = "";

  const today = new Date();

  const year = today.getFullYear();
  //get month long alone
  const monthOfToday = today.getMonth();
  const month = (f) =>
    Array.from(Array(12), (e, i) =>
      new Date(25e8 * ++i).toLocaleString("en-US", { month: f })
    );

  const day = today.getDate();

  msg = `Today is: ${day}. of ${month`long`[monthOfToday]} ${year}`;
  return msg;
}

// simple mathematical calculations

// Add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Function for subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// For multiplying of two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Function for division of
// two numbers
function divide(num1, num2) {
  if (num2 === 0) return undefined;
  return num1 / num2;
}

function mathematicalCalc(queation) {
  let answer = "";
  const queationArray = queation.split(" ");

  const num1 = parseInt(queationArray[queationArray.length - 3]);

  const operation = queationArray[queationArray.length - 2];

  const num2 = parseInt(queationArray[queationArray.length - 1]);
  // todo If-Else conditions
  if (operation === "+") {
    answer = add(num1, num2);
  } else if (operation === "-") {
    answer = subtract(num1, num2);
  } else if (operation === "*") {
    answer = multiply(num1, num2);
  } else if (operation === "/") {
    answer = divide(num1, num2);
  } else {
    answer = "Invalid operation";
  }
  return answer;
}

const ingrediants = [
  "meet",
  "bread",
  "salt",
  "oil",
  "vegetable",
  "spinach",
  "rice",
  "hhaburger",
  "ash",
  "Yogurt",
];

const ing1 = Math.floor(Math.random() * ingrediants.length);
const ing2 = Math.floor(Math.random() * ingrediants.length);

//main function
function getReply(command) {
  let answer = "";
  let question = command.toLowerCase();

  if (command.startsWith("Hello")) {
    answer = greetingAnswer(command);
  } else if (command === "What is my name?") {
    answer = `Your name is: ${firstName}`;
  } else if (command === "What day is it today?") {
    answer = getDatOfToday();
  } else if (command.startsWith("Add")) {
    answer = createActivity(command);
  } else if (command === "What is on my todo?") {
    answer = createActivity(command);
  } else if (command.includes("Remove")) {
    answer = removeActivity(command);
  } else if (command.includes("what is")) {
    answer = mathematicalCalc(command);
  } else if (command === "i am hungry") {
    //ORDER FOOD
    setTimeout(() => {
      console.log(
        `Food will arrived with ${ingrediants[ing1]} AND ${ingrediants[ing2]} 🍕`
      );
    }, 60 * 1000);
  }
  return answer;
}

console.log(getReply("Hello my name is benjamin")); //("Nice to meet you benjamin");
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?")); // "fishing added to your todo"
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 3 * 3"));
console.log(getReply("i am hungry"));

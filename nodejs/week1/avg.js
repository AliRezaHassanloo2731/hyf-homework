//calculate the average of the numbers provided
// as command line arguments.
import { argv } from "process";

let sum = 0;
const args = argv.slice(2).map((arg) => parseInt(arg));
console.log(args);
const res = args.every((element) => typeof element === "number");

//What about if no arguments are provided (node avg.js)?
if (args.length === 0) {
  console.log("Please provide number as argument.");
  process.exit(1);
}
//What should happen if the provided arguments are not numbers
else if (args.filter((num) => !isNaN(num))) {
  console.log("All arguments must be numbers.");
  process.exit(1);
} else {
  args.forEach((arg) => (sum += arg));
  const avr = sum / args.length;
  console.log(avr);
}

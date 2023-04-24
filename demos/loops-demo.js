// for = loops code "n" amount of times
// while = loops code with specific condition true

const operatingSystems = ["windows", "linux", "mac"];

for (let index = 0; index < operatingSystems.length; index++) {
  console.log(operatingSystems[index]);
}

//demo in numbers;

const nums = [1, 2, 3, 4, 5];

for (let index = 0; index < nums.length; index++) {
  console.log(nums[index]);
}

//countdwon demo

const countdown = [1, 2, 3, 4, 5];

for (let index = countdown.length - 1; index >= 0; index--) {
  console.log(countdown[index]);
}

//for loops guided practice

const string = "There once was a donkey named Eeyore.";

let counter = 1;

for (let i = 0; i < string.length; i++) {
  if (string[i] === "e") {
    counter++;
  }
}

console.log("Number of 'e' in sentence is" + " " + counter);

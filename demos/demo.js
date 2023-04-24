const fruits = ["lemon", "strawberry", "grape", "orange", "lime"];
console.log("fruits array:", fruits);
//Remove lime from the end of fruits array.
//Your code below:
console.log("I expect 'lime' to be displayed: ", fruits.pop());
//Remove orange from the end of fruits array.
//Your code below:
console.log("I expect 'orange' to be displayed: ", fruits.pop());
//Add lime to the end of fruits array
//Your code below:
fruits.push("lime");
console.log("I expect 'lime' at the end of array", fruits);
//Add banana and dragonfruit to the end of fruits array
//Your code below:
fruits.push("banana", "dragonfruit");
console.log(
  "I expect 'banana and dragonfruit' at the end of the array",
  fruits
);
//Remove the first fruit in the fruits array
//Your code below:
console.log("I expect 'lemon' to be displayed:", fruits.shift());
//Add apple to the beginning of fruits array
//Your code below:
console.log(
  "I expect 'apple' to be at beginning of array:",
  fruits.unshift("apple")
);

//Guided practice:
//create array with Honda, Toyota, Ford, Subaru
const cars = ["Honda", "Toyota", "Ford", "Subaru"];
console.log("Cars array:", cars);
// Change array using array methods to:
// "Hyundai", "Toyota", "Mercedes", "Ford", "Audi"
cars.pop();
cars.pop();
cars.push("Mercedes", "Ford", "Audi");
cars.shift();
cars.unshift("Hyundai");
console.log(cars);

//while loops = loops through code while condition is met

let isSunny = true;
let time = 1;
while (isSunny) {
  console.log("the current time is " + time);
  time++;
  if (time > 12) {
    isSunny = false;
    console.log("it is now 1300");
  }
}
//while loop with numbers

let num = 5;
while (num < 10) {
  console.log("our current number is " + num);
  num++;
}
console.log("end of loop");

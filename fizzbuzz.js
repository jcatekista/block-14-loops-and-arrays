//print 1-100
let i;
//variables 1-100
for (i = 1; i < 100; i++) {
  //number divisible by 3 and 5? print 'FizzBuzz'
  //in place of number
  if (i % 15 == 0) console.log("FizzBuzz");
  // number divisible by 3? print 'Fizz'
  // in place of number
  else if (i % 3 == 0) console.log("Fizz");
  // number divisible by 5, print 'Buzz'
  // in place of number
  else if (i % 5 == 0) console.log("Buzz");
  // print number
  else console.log(i);
}

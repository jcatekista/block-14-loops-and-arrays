let i;

for (i = 1; i < 100; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  // number divisible by 3? print 'Fizz'
  // in place of the number
  else if (i % 3 == 0) console.log("Fizz");
  // number divisible by 5, print 'Buzz'
  // in place of the number
  else if (i % 5 == 0) console.log("Buzz");
  // print the number
  else console.log(i);
}

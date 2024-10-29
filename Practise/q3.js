// FizzBuzz: Write a function that prints numbers from 1 to 100.
// For multiples of 3, print "Fizz," for multiples of 5 print "Buzz," and for multiples of both print "FizzBuzz."

function fizzFun() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("FizzBuzz");
      }
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function funFizz() {
  for (let i = 1; i <= 100; i++) {
    console.log((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i);
  }
}
funFizz()
// fizzFun();

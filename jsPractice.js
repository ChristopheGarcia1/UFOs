// Functions practice

// Takes two numbers and adds them
function addition(a, b) {
          return a + b;
}

console.log(addition(4, 5));



// Functions can call other functions
function doubleAddition(c, d) {
          var total = addition(c, d) * 2;
          return total;
}

printHello = () => "Hello there!";

addition = (a, b) => a + b;

doubleAddition = (c, d) * 2;
// Factorials
// Below is a function that is supposed to find the factorial of a number being passed in. It currently is returning 0 for every input. Look over the code and fix it so that is returnsthe correct output.

// Example
// A Factorial is when you multiple all the numbers that lead up to the input number.
// 5 factorial is written as 5!
// 5! = 1x2x3x4x5 = 120


function factorial(num) {
  let total = 1;
  for (let i = 0; i < num; i += 1) {
    total = i * total;
  }
  return total;
}

console.log(factorial(5));



// fixed version
function factorialFixed(num) {
  let total = 1;
  for (let i = 1; i <= num; i += 1) {
    total *= i;
  }
  return total;
}

console.log(factorialFixed(5));
console.log(factorialFixed(6));

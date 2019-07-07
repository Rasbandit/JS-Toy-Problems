// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

var vowelString = "Bob Ross can see the 4th dimension"; // -> 10

function vowelCounter(str) {
  str.split('')
  let total = 0;
  str.forEach(item, i => {
    switch (item) {
      case 'A':
        total += total++
        break;
      case 'E':
        total += total++
        break;
      case 'I':
        total += total++
        break;
      case 'o':
        total += total++
        break;
      case 'U'
        total += total++
        break;
    }
    return
  }

console.log(vowelCounter(vowelString));

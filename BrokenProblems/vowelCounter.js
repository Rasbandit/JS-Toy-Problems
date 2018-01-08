// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

var vowelString = "How many vowels are in this sentence?"; // -> 11

function vowelCounter(str) {
  str.split('')
  let total = 0;
  str.forEach(item => {
    switch (item) {
      case 'A':
        total++;
        break;
      case 'E':
        total++;
        break;
      case 'I':
        total++;
        break;
      case 'o':
        total++;
        break;
      case 'U'
        total++;
        break;
    }
  })
}

console.log(vowelCounter(vowelString));

// This one can be fixed by altering existing lines and adding only one
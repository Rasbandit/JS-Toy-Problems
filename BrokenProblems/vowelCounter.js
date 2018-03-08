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


// -----------------------------------------------------------------------------------
// Teaching Notes
// The switch will probably be new to the students. This will be a good chance for them
// to practice looking up on their own how something works.

// Also this one is missing a lot of brackets/parenthesis. Take the time to show them
// how proper indentation can help make it easier to find missing things. Following the
// indentation lines down can show where miss matching is happening.

// Finally the ++ is done specifically to show that it doesn't actually increment until
// after the operation. thus the result comes out a 0. Take this time to show them how ++x
// and x++ works differently using console logs.
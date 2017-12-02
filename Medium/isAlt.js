// https://www.codewars.com/kata/are-we-alternate

//Create a function isAlt() that accepts a string as an argument and 
//validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

function isAlt(str) {
  //if the string is one character long return true
  if(str.length === 1) return true

  //make a new array that is full of true false values based on if it is a vowel or not
  // true is a vowel, false is not
  // convert the string to lower case to limit the test needed to run
  // split the string into an array to loop through it
  // map over each item
  var test = str.toLowerCase().split('').map(letter => {
    return (/^[aeiou]$/i).test(letter);
  })
  //now that we have an array we need to test if they arlternate
  //figure out what the first value is in the new array, if false we will start at 0, and 1 for true
  if(test[1]) {
    var counter = 1;
  } else {
    var counter = 0;
  }
  //for every item in the array, loop through it and add 1 to the counter for every true value,
  //and minus 1 for every false value
  //  aslong as the values stays 0 or 1 then we know it alternates perfectly but if it goes higher than that
  //  we know it has two true's or falses in a row
  for(var i = 0; i < test.length; i++) {
    if(test[i]) counter++
    else counter--
    //if we stay from perfect alternation, return false
    if(counter > 1 || counter < 0) {
      return false
    }
  }
  //if everything went smoothly return true
  return true
}

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
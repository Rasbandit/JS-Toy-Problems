// Swap Case
// Below is a function that takes in a string and reverses the case of every character and returns the new string.
// It is currently in a broken state and does not run properly.
// It is possible to fix the code by only modifying the existing code, not adding new lines.

//test data
//'This Is An Example' becomes 'tHIS iS aN eXAMPLE'
//'boB rOss IS thE OrIgInAl GanGster' Becomes 'BOb RoSS is THe oRiGiNaL gANgSTER'


function caseReverse(str) {
var strArray = str.split(' ');
  for (var i = 1; i < strArray.length; i++) {
    if (strArray[i] === strArray[i].toUpperCase()) {
      strArray[i].toLowerCase();
  } else {
      strArray[i].toUpperCase();
  }
  
  return strArray
}

console.log(caseReverse('boB rOss IS thE OrIgInAl GanGster'));
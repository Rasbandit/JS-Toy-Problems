//Swap Case
//create a function that takes in a string and revereses the case of every character and returns the new string.

//test data
//'This Is An Example' becomes 'tHIS iS aN eXAMPLE'
//'PoOh bEAr IS thE OrIgInAl GanGster' Becomes 'pOoH BeaR is THe oRiGiNaL gANgSTER'


function caseReverse(str) {
  var strArray = str.split(' ');
  for (var i = 1; i < strArray.length; i++) {
    if (strArray[i] === strArray[i].toUpperCase()) {
      strArray[i].toLowerCase();
    } else {
      strArray[i].toUpperCase();
    }
  }
  return strArray
}

console.log(caseReverse('PoOh bEAr IS thE OrIgInAl GanGster'));
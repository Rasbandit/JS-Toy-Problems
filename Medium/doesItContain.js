//Does it Contain
//write a function that takes two strings as parameters. have your function look for the value of the second parameter inside the first (example below). Return how many times the searched for characters appear

//'Buzz Lighyear for president', 'uzz' returns 1
//'can the can-can be canceled by a canible?', 'can' returns 5

//Advanced
//also return the index where each item can be found.

function twoString(str, str2) {
    var counter = 0;
    var tempStrArray = str.toLowerCase().split('');
    var tempStrArray2 = str2.toLowerCase().split('');
    var previousCount = 0;
    var topMaxString = str2.length;
    var indexArr = [];

    for(var i = 0; i < str.length; i++) {
        if(str[i] === str2[previousCount]) {
            console.log('Couting previous Showing string: ' + str[i]);
            previousCount++;
        } else if (previousCount === topMaxString) {
            console.log('Max count found. Showing string: ' + str[i]);
            counter++;
            indexArr.push(i-topMaxString);
            previousCount = 0;
        }
    }

    console.log('Total counted: ' + counter + ' Index found at: ' + indexArr );
}


twoString('can the can-can be canceled by a canible?', 'can');


String.prototype.doesItContain = function (sub) {
  var tracker = 0;
  for(var i = 0; this.length - sub.length; i++) {
    if(i + sub.length > this.length) {
      return tracker
    }
    else {
      if(this.substring(i, i + sub.length) === sub) {
        tracker++;
      }
    }
  }
};

var str = 'bobob';
console.log(str.doesItContain('b'))
var str2 = 'Fizzbuzz, buzz is what i sayzz';
console.log(str2.doesItContain('zz'))

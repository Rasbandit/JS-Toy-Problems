# TUESDAY TOY PROBLEM

## String Cardio

Link: https://repl.it/@ThrashMaster/STRINGCARDIO

Text: 
<code>
//|  STRING CARDIO  |\\

//|  NOTE: This is designed to stretch you. If you don't finish, don't fret. 

//|  PART ONE: WARMUP  |\\

const sampleString = "   Hello, my name is ZeIbe;ljbOAekj;lNHe";

//|  .indexOf()
//|  1. Find the index of the capital Z and assign it to zIndex.
//|  Code Below:

let zIndex;

//|  .slice()
//|  2. Assign the value of everything before the caplital Z to the slicedString variable.
//|  Code Below:

let slicedString;

//|  .charAt()
//|  3. Find out what character is in the tenth index of slicedString.
//|  Code Below:

//|  .includes()
//|  4. Find out if "hello" is part of slicedString.
//|  Code Below:

//|  .startsWith() , .endsWith()
//|  5. Find out if slicedString begins or ends with an empty space.
//|  Code Below:

//|  .trim()
//|  6. Assign slicedString to the trimmedString variable below without any whitespace at the beginning or the end. 
//|  Code Below:

let trimmedString;

//|  .concat()
//|  7. Use concat to add your own name to trimmedString and assign the result to personalGreeting.
//|  Code Below:

let personalGreeting;


//|  PART TWO: SINGLE-LINE, SINGLE-METHOD  |\\
//|  Each of these problems should be solved with a single method. It may be a method above, or it may be one you haven't yet used.

//|  8. Remove the white space from the beginning of slicedString, but not from the end. Assign the result to startTrimmed.
//|  Code Below:

let startTrimmed;

//|  9. Remove "Hello" from startTrimmed, and replace it with "Hi". Assign the result to lessFormal.
//|  Code Below:

let lessFormal;

//|  10. Repeat lessFormal three times, and assign the result to stutterString below.
//|  Code Below:

let stutterString;

//|  11. Convert stutterString to lowercase, and assign it to correcterString below.
//|  Code Below:

let correcterString;

//|  PART THREE: MULTI-METHOD, SINGLE-LINE  |\\
//|  Complete the following challenges without declaring any additional variables. 
//|  -- You may not use let, var, or const. 
//|  -- You should not create any string literals. Do not use ' , " , or `.
//|  -- You may chain as many methods as you like.

//|  13. Turn startTrimmed into "HELLO, MY NAME IS carrie". Assign it to carrieString below.
//|  Code Below;

const carrie = "CARRIE";
let carrieString;

//|  14. Without counting letters, find the index of the second 5 in mixedString and assign it to middleIndex.
//|  Code Below:

const mixedString = "Come to Soooowbweay for our 5! 5 dollar! 5 dollar foot-long!"
const target = "5"
let middleIndex;

//|  15. Save Grandpa
//|  Code Below:

const grandpaInDanger = "Let's eat... grandpa!";
const commaHint = ",";
const ellipsis = "...";
let grandpaIsSaved;

//|  PART FOUR: MORE CHALLENGES  |\\
//|  No constraints. Go for it! 

//|  16. Make the palindromeChecker function take in an array and return an array of ONLY palindromes (words that are the same backwards and forwards.) Check it against all three of the palindromeArrays.

const palindromeArray1 = ["Tacocat" , "Sugarray" , "Dinosaur" , "Racecar"];
const palindromeArray2 = ["Hannah" , "Meghan" , "Eve" , "Adam" , "Jem Bob" , "Mom" , "Dad"];
const palindromeArray3 = ["Madam, in Eden, I'm Adam" , "Yo, banana boy!" , "UFO Tofu" , "This is not a palindrome"];

function palindromeChecker(arr){
  //| Code In Here!
}

//|  17. Code the grammarFunc function so it takes in a string and returns it again but with the first letter of every sentance caplitalized. Test it with the three strings below.

const uncappedOne = "i never caplitalize. i'm afraid to start. i'm worried i won't stop.";
const uncappedTwo = "mary had a fruit. it was delicious. she had another, and another. soon, all the fruits were gone.";
const uncappedThree = "i am. a yam. a yam. i am. i am. a yello. llama. lamb."

function grammarFunc(str){
  //| Code in Here!
}

//|  18. Code the pigify function to take in a string and return the string tranlated into pig latin. Pig latin removes the first letter of every word, adds "ay" to it, and hyphenates it onto the end of the word. For instance, "see you later" becomes "ee=say 0u-yay ater-lay."

const prePiggedOne = "Round the rugged rocks, the ragged rascal ran.";
const prePiggedTwo = "There are strange things done in the midnight sun, by the men who toil for gold...";
const prePiggedThree = "Somebody once told me the world was gonna roll me."

function pigify(str){
  //|  Code in Here
}
</code>
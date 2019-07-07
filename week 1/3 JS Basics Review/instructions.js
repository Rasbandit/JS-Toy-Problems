//DATA TYPES

/*
For the first part of the exercise let's make
some variables with different data types
*/

//list the six main data types

//Create a variable with a boolean value called likesPizza. ANSWER CORRECTLY! 

//Create a variable with a string datatype and call it myString

//Create a variable with the value of your favorite number called favoriteNumber

//Create a variable with an Array of 5 items listing your favorite foods called favoriteFoods

/*
Create a variable called favCeleb that is an Object with the key value pairs of name, age, quote, and characteristics.
name should be a string, age should be a number, quote should also be a string,
and characteristics should be an array.
*/

//Create a function that returns the value of the favoriteNumber variable that you created

//Create a variable with the value of null called placeholder and one of undefined called nothing

//!BONUS ROUND!

// Create a new variable that is equal to a concatenation of myString and favoriteNumber and call it concat

// Create another concatenated variable using myString, favoriteNumber, and two different items from favoriteFoods

//Try to use the typeof Operator on all of the variables you just created

//Truthy and Falsy

//comment next to these values whether they are truthy or falsy

let car = 'DeLorean'

let nope = false

let pizza = NaN

const theVoid

let person = {}

const zero = 0

let blank = ''

let differentBlank = ' '

let honestPoliticians = []

//Try to put the variables in this if statement to help if you get stuck

if (){
    console.log(`It's truthy!`)
} else{
    console.log(`That's falsy, my dude.`)
}

//SCOPE

//Help! the imBroken function wont work! try to fix it using what you learned about scope in yesterday's lecture and afternoon project

const magicNumber = 42
let adder = 4

function notSoMagicNumGenerator(num){
    let notSoMagicNumber = num
    return notSoMagicNumber
}


function imBroken(){
    return magicNumber + notSoMagicNumber
}

notSoMagicNumGenerator(adder)
imBroken()

//Here's another function that needs a fixin'

let person = "Donovan"
let goldenYear = 50

function assignVals(name,age){
    return `Hello my name is ${name} and I am ${age} years young.`
}

assignVals(goldenYear,person)

//Oopsie I brokeded another!

let doge = 'bestest boy'

function dogtown(){
    console.log(doge)
}

dogtown('Me cat now')

//!BONUS ROUND!

//Uncomment the same problem and find a different way to solve the scope issue

/*
const magicNumber = 42

function notSoMagicNumGenerator(num){
    let notSoMagicNumber = num
    return notSoMagicNumber
}


function imBroken(){
    function innerFunc(){
        return magicNumber + notSoMagicNumber
    }
}

notSoMagicNumGenerator(4)
imBroken()
*/

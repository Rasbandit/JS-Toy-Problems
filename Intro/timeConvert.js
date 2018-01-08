//Time Converter
//write a function that takes in a single num parameter. Assume the number passed in the an amount of time measured in seconds. your function will convert the number of seconds into a string that will depict how many days, hours, minutes and seconds that is. Return one string.

//assume the largest time value will not go bigger than weeks, don't calculate for months

//Example
// 234 is passed into the function. the function returns "2:54" (minutes: seconds)
// 9087 passed in returns "2:31:17" (hours: minutes: seconds)


// Step 1: Clarify - Understand the question
//take a number in seconds and convert it to seconds minutes hours

// Step 2: Create sample data
// 20 - > 20
// 60 - > 1:00
//189 - > 3:09
//9087 - > 2:31:17

// Step 4: Signature

//function timeShower(seconds: number) -> string


// Step 5: List code constructs

//if conditional
//division, modulous
//variables


// Step 6: Pseudo Code
// create a funfunfunction
// declare hours, mins, seconds variable
// if there is more than 60 seconds, divide by 60 and store the result as minutes, the moduous of this number is our remianing seconds
// if there is more than 60 minutes, divide by 60 and store the rusult as hours, the moduouls of this is our remaining minutes

//return


// Step 7: Solve

// 20 - > 20
// 60 - > 1:00
//189 - > 3:09
//9087 - > 2:31:27

function timeShower(input) {
    let hours = 0,
     minutes = 0,
     seconds = 0;
  // if there is more than 60 seconds, divide by 60 and store the result as minutes, the moduous of this number is our remianing seconds
  if(input > 60) {
    minutes = Math.floor(input / 60);
    minutes
    seconds = input % 60;
  } else {
    return input + ''
  } if(minutes > 60) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    hours
  } else {
          minutes + ':' + seconds
    return `${minutes}:${seconds}`
  }
  return `${hours}:${minutes}:${seconds}`
}

let x = timeShower(121)

x;
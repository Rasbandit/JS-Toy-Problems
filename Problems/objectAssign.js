// Below we have two parts to a cat. But we want one whole cat.
// We need to combine the properties of both catParts and catLimbs into cat so we get one object with all 7 properties.

let catLimbs = { legs: 4, tail: .5, head: 1 }
let catSounds = { sound: 'Meow', makeSound: function () { return this.sound } }

let cat = { name: 'Dr. Mittens', favoriteFood: 'fish flesh' }

// We can use the for in loop to go through each property of an object.
// We will need to do this twice, once for catLimbs and once for catSounds.
// You will also need to use bracket notation.


// There has to be a better way to do that. And there is!
// Try searching for Object.assign and looking at what that does.
// Store the result of the Object.assign to a variable.
// Try console.logging all the objects and pay close attention to the results. You may have two variables with all 7 properties.
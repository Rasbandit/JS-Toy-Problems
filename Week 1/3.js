// Part 1
// Create two variables, x and y and set them both equal to the same number.

// Run a console.log and test if x and y are equal to each other.
// Make sure to test both == and ===.

// Now make a third variable named z set it equal to x.
// Test to see if x and z are equal also using the same method.

// Part 2
// Make two objects, personOne and personTwo with identical properties and values, but make sure to write out the object twice, and not set personTwo equal to personOne0.

// test to see if personOne equals personTwo, again make sure to test both == and ===
// You will notice that even if objects have the same properties they don't equal each other.

// Make a new variable and set it equal to personOne.
// Now run the test again to see if they are equal to each other.

// Now change a value on personTwo and then console.log personOne, yes, personOne.

// Part 3
// redo the steps in part 2 but make arrays instead of objects.

// Part 4
// This phenomenon is called passing by reference and passing by value. Objects and Arrays are large and take up a lot more memory than things like numbers or strings. When you make a new variable in JS and you have it equal an existing object or array it does not make a new instance, it instead references the original one. So you end up having 2 variables pointing to literally the same data on memory and if you change one the other one is pointing to the same piece of data.

// How do we create actual copies of arrays and objects you might be asking?
// Great question, there are easy ways for both.

// objects
// Were going to modify your code from step 2 so that personThree is actually a copy, and not just pointing to the same values.
// You can use the function Object.assign() to make new objects. If you pass in an empty object as the first parameter {} and the object you want copied as the second parameter.
// It ends up looking like this
// let personThree = Object.assign({}, personOne).
// You may be asking what is the purpose of the empty object {} before personOne? Before I answer try it without it and alter a value on personThree then console.log(personOne), then do it again but with the {} included.

// You should notice we have the same issue and that the object is passed by reference when we don't include the {}.
// the {} creates a new object in memory for us to.

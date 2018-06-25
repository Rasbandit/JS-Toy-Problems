// Bellow we have a cat object and we need to make a copy of it because we decided to clone our cat.
// Make a new variable and set it equal to to cat to make a copy.

const cat = { name: 'Dr. Mittens', favoriteFood: 'fish flesh' };

// now change the value of name on the new cat.
// Check the values of both the old and the new cat.

// They both have the same name?!
// This is because we created a reference to the same object, we didn't make a copy.
// Then how do we make a copy?

// We have a few ways to do this. first we can use a for in loop and pass all the values and properties to a newly created object. This works, but its a lot of line of codes just to do a copy, and its pretty limited.
// Instead lets use Object.assign, which can do a lot of things, including make a copy of the object.
// Try looking up Object.assign and implement it to make a true copy, and not a reference to the original object.

// Once you use Object.assign to make a copy try using it to also combine the properties of multiple object.
// It can also be used to update a property at the same time as combining things.

// Bonus Hard Mode

// Take a look at the object spread operator. It too can do the same functionality as Object.assign.

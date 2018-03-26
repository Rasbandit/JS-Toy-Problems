// We will be building onto the same Cart class from earlier.
// This time we are adding the functions to calculate the total price of the cart.
// First we will be doing the calculate total method. Before we can do that we need to alter our constructor function to take in a tax rate, and keep track of the total price of the cart.
// Add two values in the constructor called total and taxRate. The constructor function should also take in another parameter and set that to the tax rate.
// When the calculate total runs it should set the total value to the total cost of the cart.
// We will also want this function to run any time we remove an item from the cart so the total automatically updates. We also want this to run after all the initial values are set.
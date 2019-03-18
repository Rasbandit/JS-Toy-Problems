// We will be building onto the same Cart class from earlier. We will
// be making the calculateTotal method.

// Add two new values in the constructor called this.total and this.taxRate. The constructor should
// take in another paramter for taxRate and store it to this.taxRate. We also want to add another method
// that can calculate the total price of the cart. On top of this we want it to calculate
// the total with a variable tax rate. Have the calculate total method take in a taxRate parameter.
// We also want to make it so if this function is invoked without being given a tax rate it will
// still work. We can use default params to set a default if one is not provided, have it default to
// this.taxRate if a value is not provided. (look up default params).

// The constructor should
// calculate the total when it runs and should set the total value to this.total
// for the cart. We will also want this function to run during the constructor to set
// the initial value for total. We also want to update the total any time we
// remove/add/alter an item in the cart. To accomplish this you can invoke this.calculateTotal
// at the end of the other methods.

const exampleCart = [
  {
    id: 1,
    product: 'Bob Ross Paint Kit',
    price: 45.99,
    quantity: 2,
  },
  {
    id: 2,
    product: 'Paint Palette',
    price: 7.99,
    quantity: 3,
  },
  {
    id: 3,
    product: 'Paint Thinner',
    price: 15.99,
    quantity: 2,
  },
];

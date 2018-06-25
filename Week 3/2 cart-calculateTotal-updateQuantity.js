// We will be building onto the same Cart class from earlier. We will
// be making the calculate total and update quantity methods.

// First we are adding in the ability to update the quantity of a specific item in
// the cart. This method will take in two parameters, first being the id of the
// item to update, and second the quantity to set it to.

// Add a value in the constructor called this.total. The constructor
// When the calculate total runs it should set the total value to this.total for
// the cart. We will also want this function to run during the constructor to set
// the initial value for total. We also want to update the total any time we
// remove/add/alter an item in the cart.

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

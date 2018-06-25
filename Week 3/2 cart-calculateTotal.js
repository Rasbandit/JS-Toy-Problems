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

class Cart {
  constructor(cart, taxRate) {
    this.cart = cart;
    this.taxRate = taxRate;
    this.total = 0;
    this.calculateTotal();
  }
  removeItem(id) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.calculateTotal();
  }
  updateQuantity(id, qty) {
    this.cart = this.cart.map(item => {
      if (item.id === id) item.quantity = qty;
      return item;
    });
    this.calculateTotal();
  }
  calculateTotal(taxRate = this.taxRate) {
    this.total = (this.cart.reduce((total, item) => total + item.price * item.quantity, 0) * taxRate).toFixed(2);
  }
  addItem(newItem) {
    const index = this.cart.findIndex(item => item.id === newItem.id);
    if (index !== -1) this.cart[index].quantity++;
    else this.cart.push(newItem);
    this.calculateTotal();
  }
}

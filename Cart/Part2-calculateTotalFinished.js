// Below is an array of products that are in a cart.
// Write a function that will take in the cart and a tax amount and calculate the total price of the cart with the tax.
// Return the total of the cart rounded the 2nd decimal place

let cart = [{
  id: 1,
  product: 'Snapple Raspberry Tea',
  price: 16.82,
  quantity: 2
}, {
  id: 2,
  product: 'Wine - Peller Estates Late',
  price: 15.07,
  quantity: 3
}, {
  id: 3,
  product: 'Isomalt',
  price: 6.42,
  quantity: 2
}, {
  id: 4,
  product: 'Green Scrubbie Pad H.duty',
  price: 15.33,
  quantity: 3
}, {
  id: 5,
  product: 'Soup Campbells Split Pea And Ham',
  price: 4.03,
  quantity: 3
}];


function calculateTotal(cart, tax) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + (cart[i].quantity * cart[i].price)
  }
  return (total * tax).toFixed(2)
}

let total = calculateTotal(cart, 1.06)
total
// Below is an array of products that are in a cart.
// Write a function That will take in an item to be added to the cart and the cart array.
// The funciton will add the item to the cart unless it is a duplicate, then update the quantity instead.
// When you have updated the cart then return the new cart.


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

function addToCart(product, cartItems) {
  const newCart = cartItems;
  let foundDuplicate = false;
  for (let i = 0; i < newCart.length; i++) {
    if (product.id === newCart[i].id) {
      foundDuplicate = true;
      newCart[i].quantity += product.quantity;
    }
  }
  if (!foundDuplicate) {
    newCart.push(product);
  }

  return newCart;
}

cart = addToCart({
  id: 6,
  product: 'Bob Ross Paint',
  price: 26.92,
  quantity: 2
}, cart);

// console.log(cart)

cart = addToCart({
  id: 1,
  product: 'Snapple Raspberry Tea',
  price: 16.82,
  quantity: 2
}, cart);

console.log('duplicate', cart);

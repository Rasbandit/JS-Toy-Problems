// Below is an array of products that are in a cart.
// Write a function That will take in an id of an item to be removed from the cart and the cart array.
// The function will remove the item from the array if it exists.
// When you have updated the cart then return the new cart.

//Advance use a filter function
//Master Do this in one line


let cart = [{
  id: 1,
  product: "Snapple Raspberry Tea",
  price: 16.82,
  quantity: 2
}, {
  id: 2,
  product: "Wine - Peller Estates Late",
  price: 15.07,
  quantity: 3
}, {
  id: 3,
  product: "Isomalt",
  price: 6.42,
  quantity: 2
}, {
  id: 4,
  product: "Green Scrubbie Pad H.duty",
  price: 15.33,
  quantity: 3
}, {
  id: 5,
  product: "Soup Campbells Split Pea And Ham",
  price: 4.03,
  quantity: 3
}]

function removeFromCart(id, currentCart) {
  let newCart = currentCart;
  for (let i = 0; i < newCart.length; i++) {
    if (newCart[i].id === id) {
      newCart.splice(i, 1)
    }
  }
  return newCart;
}

let removeItem = (id, currentCart) => currentCart.filter(item => item.id !== id)

let x = removeItem(2, cart);

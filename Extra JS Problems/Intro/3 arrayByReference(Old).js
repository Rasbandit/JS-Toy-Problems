// Below is some broken code. Read over all the code below, at the end you will
// see that the results are not what you would expect. Look over the code and
// try and identify where the issue is caused. You will want to console log
// oldInventory and newInventory often to see how it changes.

const oldInventory = [
  ['calico', 'tabby'],
  ['lab', 'corgi', 'rottweiler'],
  ['goldfish', 'beta', 'angel fish', 'flounder'],
];

// Write a function to count the number of animals in the pet shop's old inventory

function countInventory(arr) {
  let count = 0;

  arr.forEach(group => (count += group.length));

  return count;
}
console.log('countInventory:', countInventory(oldInventory));

// All of the animals were very popular and were all sold in the past week
// these same animals were ordered for the next week
const newInventory = oldInventory;

// some new, exotic animals were ordered for the next week as well.
newInventory.push(['gorilla', 'alligator', 'lion', 'humpback whale']);

// the pet store needs to know how many more pens they need for the new animals
// write a new function to count the number of animals in both the old and new inventory.
// this function should return the difference in number of animals between the old and new inventories (new - old)

function compareInventory(oldArr, newArr) {
  let oldCount = 0,
    newCount = 0;

  oldArr.forEach(group => (oldCount += group.length));
  newArr.forEach(group => (newCount += group.length));

  return newCount - oldCount;
}
console.log('compareInventory:', compareInventory(oldInventory, newInventory));

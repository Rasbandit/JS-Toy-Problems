const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];
// .filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// .map()
// 2. Give us an array of the inventors' first and last names

// .sort()
// 3. Sort the inventors by birth date, oldest to youngest

// .reduce()
// 4. How many years did all the inventors live?

const animals = ['war tortis', 'siege badger', 'gladiator giraffe'];
const moreAnimals = ['battle toad', 'mounted assault snake', 'K8'];
const animal = 'Doge';

// Spread Operator ...
// 5. Combine the two arrays, and add the animal in the middle

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
// .some()
// 5. is at least one person 19 or older?
// .every()
// 6. is everyone 19 or older?

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];
// .find()
// 7. find the comment with the ID of 823423

// .findIndex()
// 8. Find the index of the item with the ID of 823423

// unable to compare objects with the same keys and values

const firstCat = { name: 'Nala', age: 7 };
const secondCat = { name: 'Nala', age: 7 };

console.log('firstCat == secondCat?\n=>', firstCat == secondCat);

console.log('firstCat === secondCat?\n=>', firstCat === secondCat);

// side effects copying by reference

const firstDog = { name: 'Max', age: 12 };
const secondDog = firstDog;

console.log('\nfirstDog == secondDog?\n=>', firstDog == secondDog);

console.log('firstDog === secondDog?\n=>', firstDog === secondDog);

secondDog.name = 'Carly';

console.log('firstDog:\n', firstDog);
console.log('secondDog:\n', secondDog);

// Object.assign lets us copy by value to a new reference in memory

const firstGoldfish = { name: 'Jim', age: 0.5 };
const secondGoldfish = Object.assign({}, firstGoldfish);

console.log('\nfirstGoldfish == secondGoldfish?\n=>', firstGoldfish == secondGoldfish);

console.log('firstGoldfish === secondGoldfish?\n=>', firstGoldfish === secondGoldfish);

secondGoldfish.name = 'Jonathan';

console.log('firstGoldfish:\n', firstGoldfish);
console.log('secondGoldfish:\n', secondGoldfish);

// spread operator, give me the news!!!

const firstHamster = { name: 'Kim', age: 2 };
const secondHamster = { ...firstHamster, name: 'Erin' };
// { name: 'Erin', name: 'Kim', age: 2 }

console.log('\nfirstHamster:\n', firstHamster);
console.log('secondHamster:', secondHamster);

// spread operator
function addTwo(x, y) {
  return x + y;
}

function addX(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

const nums = [1, 2];
console.log(addTwo(...nums));

// Object.assign copies nested objects

const myObj = {
  myKey: {
    mySecondKey: 'hello',
  },
};

console.log(Object.assign({}, myObj));

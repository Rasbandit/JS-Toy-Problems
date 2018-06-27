// You will be given a series of fractions in the form of nested arrays.
// E.G. an example argument would be [ [1, 2], [1, 3], [1, 4] ]
// Which would equate to 1/2, 1/3, and 1/4.

// Your job is to write a function that finds the lowest common denominator across all passed-in fractions.
// Then, convert all the fractions to the lowest common denominator, and return them as a string of parentheticals.
// For example, the above argument would return: "(6,12)(4,12)(3,12)"

// Do not assume there will be only 3 fractions.  Your function will need to account for an unknown number of nested arrays.

const fractionsOne = [[1, 2], [1, 3], [1, 4]];
const fractionsTwo = [[3, 7], [8, 12], [7, 45]];

function LCD(fractions) {
  let largestDenominator = 0;
  fractions.forEach(fraction => {
    const [numerator, denominator] = fraction;
    if (denominator > largestDenominator) {
      largestDenominator = denominator;
    }
  });
  let denominatorsAreDivisibleByCounter = 0;
  let currentLCDToCheck = largestDenominator;
  const numberOfFractions = fractions.length;
  do {
    denominatorsAreDivisibleByCounter = 0;
    fractions.forEach(fraction => {
      const fractionsDenominator = fraction[1];
      if (currentLCDToCheck % fractionsDenominator === 0) {
        denominatorsAreDivisibleByCounter += 1;
      }
    });
    if (denominatorsAreDivisibleByCounter !== numberOfFractions) {
      denominatorsAreDivisibleByCounter = 0;
      currentLCDToCheck += largestDenominator;
    }
  } while (denominatorsAreDivisibleByCounter !== numberOfFractions);

  const commonDenominatorFractions = fractions.map(fraction => {
    const numberToMultiplyBy = currentLCDToCheck / fraction[1];
    fraction[0] = numberToMultiplyBy * fraction[0];
    fraction[1] = numberToMultiplyBy * fraction[1];
    return fraction;
  });

  return commonDenominatorFractions;
}
const x = LCD(fractionsOne);
x;
const y = LCD(fractionsTwo);
y;

function lowestCommonDenominator(fractions) {
  let foundDenominator = false;
  for (let i = 1; foundDenominator === false; i++) {
    let tracker = 0;
    for (let j = 0; j < fractions.length; j++) {
      if (i % fractions[j][1] === 0) {
        tracker++;
      }
    }
    if (tracker === fractions.length) {
      foundDenominator = true;
      for (let k = 0; k < fractions.length; k++) {
        fractions[k][0] = i / fractions[k][1] * fractions[k][0];
        fractions[k][1] = i / fractions[k][1] * fractions[k][1];
      }
      return fractions;
    }
  }
}

lowestCommonDenominator(fractions);
lowestCommonDenominator(fractionsTwo);

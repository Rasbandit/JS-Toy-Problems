/* Don't change below this line */
const composer = {
  firstName: 'Wolfgang',
  lastName: 'Mozart',
  age: 35,
  country: 'Austria',
  era: 'Classical',
  children: [
    'Raimund Leopold Mozart',
    'Karl Thomas Mozart',
    'Johann Thomas Leopold Mozart',
    'Theresia Constantia Adelhaid Friederica Marianna Mozart',
    'Anna Maria Mozart',
    'Franz Xaver Wolfgang Mozart'
  ],
  compositions: [],
  compose(piece) {
    this.compositions.push(piece)
    return this.compositions
  }
}
/* Don't change above this line */

// Combine the composer's first and last names, storing on
// a variable called 'fullName'. 

// CODE HERE

// Create a new variable called 'favoriteChild'. Let its
// value be the child with the longest name (because
// everyone knows the children with the longest names are
// their parents' favorites.)

// CODE HERE

// Create another variable called 'mouthsToFeed' and set its value to be 
// the length of the children array.

// CODE HERE

// Console log the compositions array. What is going to happen?

// CODE HERE

// Create a variable called 'fruitless'. The value of this variable should 
// be the length of the compositions array.

// CODE HERE

// Invoke the 'compose' function on our composer object. The function has 
// a parameter of 'piece'. Give the compose function an argument of 
// 'Twinkle Twinkle Little Star' for the piece parameter. This will add 
// 'Twinkle Twinkle Little Star' to the compositions array, and return the 
// updated compositions array. Save the returned value to a variable 
// called 'prolific'.

// CODE HERE

/* Don't change below this line */
const composers = [
  {
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    age: 56,
    country: 'Germany',
    era: 'Romantic',
    children: [
    ],
    compositions: ['Ode To Joy', 'Fur Elise'],
    compose(piece) {
      this.compositions.push(piece)
      return this.compositions
    }
  },
  {
    firstName: 'Johann Sebastian',
    lastName: 'Bach',
    age: 65,
    country: 'Germany',
    era: 'Baroque',
    children: [
      'Wilhelm Friedemann Bach',
      'Johanna Maria Dannemann',
      'Carl Philipp Emanuel Bach',
      'Gottfried Heinrich Bach',
      'Johann Christoph Friedrich Bach',
      'Lucia Elisabeth Münchhausen',
      'Johann Christian Bach',
      'Elisabeth Juliane Friederica',
      'Johann Christoph Altnickol',
      'Johanna Carolina',
      'Regina Susanna'
    ],
    compositions: ['St. Mathew\'s Passion', 'Well Tempered Klavier', 'Jesu, Joy of Man\'s Desiring', 'French Suite No. 5', 'Italian Concerto'],
    compose(piece) {
      this.compositions.push(piece)
      return this.compositions
    }
  },
  {
    firstName: 'John',
    lastName: 'Williams',
    age: 87,
    country: 'United States',
    era: 'Today',
    children: [
      'Joseph Williams',
      'Jennifer Williams',
      'Mark Towner Williams'
    ],
    compositions: ['Star Wars', 'Jurassic Park', 'Harry Potter', 'Indiana Jones'],
    compose(piece) {
      this.compositions.push(piece)
      return this.compositions
    }
  },
  {
    firstName: 'Neal',
    lastName: 'Hefti',
    age: 85,
    country: 'United States',
    era: '20th Century',
    children: [],
    compositions: [],
    compose(piece) {
      this.compositions.push(piece)
      return this.compositions
    }
  } 
]
/* Don't change above this line */

// Access Beethoven's country

// CODE HERE

// Access 'Harry Potter' from John William's list of compositions

// CODE HERE

// Neal Hefti composed using math. Here's his composition:
/* Don't change below this line */
let song = []
for (let i = 0; i < 16; i++) {
  song.push('d' - 1)
}
song.push(' batman!')
song = song.join('')
console.clear()
/* Don't change above this line */

// Invoke Neal Hefti's 'compose' method passing in the 'song' variable as 
// an argument.

// CODE HERE

// Now that we have updated Neal's compositions, console log Neal Hefti's compositions
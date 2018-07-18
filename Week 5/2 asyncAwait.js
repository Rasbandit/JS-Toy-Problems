// We will be building a function that makes a request to the Star Wars API and gets a person.
// It can be any person you want. One of the properties on the person is their home world on res.data.homeworld, it's a URL (string), and can be used in another axios request.
// Inside the .then of the initial request do another axios using the home world URL to get the home world.

// Inside the home world response there is a list of people on res.data.residents who also live on the planet, they too are URLs.
// Pick an item from the array and make another api call using the string URL to get that person.

// We are now 3 .then's deep and the code is staring to look crazy and hard to manage.
// We are going to convert this code into what is called an async function that will simplify this a lot.
// First comment out your code. Then lets take look at what exactly an axios request is by console.loging an axios request. It should look like this:

// console.log(axios.get(URL)).

// What do you think we're going to get here?
// It's a promise. Now try and save the axios request to a variable. Like this:

// var starWarsDude = axios.get(URL)

// The starWarsDude variable is also a promise. We could attach the .then to starWarsDude after that line if we wanted, but we wont in this example.

// Instead we are going to make an async function. Make a new function, but before the word function, write the word async
// Move the starWarsDude line into the function, and Write the word await after the equal but before the axios. It should look something like this:

// var starWarsDude = await axios.get(url)

// Now console.log(starWarsDude)

// What is it? It should be the response from the API instead of the promise. We are waiting to get a response and assigning the actual response to the variable instead of the promise.

// Now using the value of starWarsDude.homeworld make the axios call to get their home planet, again using the await and assigning it to a variable.
// And again using the data from homeworld.resident make another axios call to get a person from that list.

// ////////SOLUTION////////////

const axios = require('axios');

// function swapi(num) {
//   axios.get(`https://swapi.co/api/people/${num}`).then(res => {
//     console.log(res.data.name)
//     axios.get(res.data.homeworld).then(planetRes => {
//       console.log(planetRes.data.name)
//       axios.get(planetRes.data.residents[Math.floor(Math.random() * planetRes.data.residents.length)]).then((randomPerson) => {
//         console.log(randomPerson.data.name)
//       })
//     })
//   })
// }

async function swapi(num) {
  const { data: originalPerson } = await axios.get(`https://swapi.co/api/people/${num}`);
  console.log(originalPerson.name);
  const { data: planet } = await axios.get(originalPerson.homeworld);
  console.log(planet.name);
  const { data: neighbor } = await axios.get(planet.residents[Math.floor(Math.random() * planet.residents.length)]);
  console.log(neighbor.name);
}

swapi(Math.ceil(Math.random() * 50));

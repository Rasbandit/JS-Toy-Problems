// We will be building a function that makes a request to the Star Wars API and gets a person.
// It can be any person you want, but one of the properties on the person is their home world on res.data.homeworld
// The home world value is a string that is a url, and can be used in another axios request.
// inside the .then of the initial request do another axios using the home world string to get the home world.

// Inside the home world response there is a list of people on res.data.residents who also live on the planet, they too are URLs.
// pick an item from the array and make another api call using the string url to get that person.

// We are now 3 .then's deep and the code is staring to look crazy and hard to manage.
// We are going to convert this code into what is called an async function that will simplify this a lot.
// first comment out your code and I want you to do console.log an axios request. It should look like this

// console.log(axios.get(URL)).

// What do you think were going to get here? we get a promise. Now try and save the axios request to a variable.

// var starWarsDude = axios.get(URL).

// The starWarsDude variable is also a promise. We could attach the .then to starWarsDude after that line if we wanted, but we wont.

// Instead we are going to make a function an async function. Make a new function, but before the word function write async
// Move the starWarsDude line into the function. Write the word await after the equal but before the axios. Now console.log(starWarsDude)
// What is it? It should be the response from the API instead of the promise. We are waiting to get a response and using the response to assign it to the variable instead of actual promise.
// Now using starWarsDude.homeworld value make the axios call to get their home planet, again using the await and storing it to a variable.
// And again use data from homeworld.resident make another axios call to get a person from that list

// Bonus fun: you can destructure the response so you can get right to the data

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

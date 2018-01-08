// Number of people in the bus
//
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
//
// You are provided a list (or array in JS) of integer array. Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item).
//
// The first integer array has 0 number in the second item, since the bus is empty in the first bus stop.
//
// Your task is to return number of people who are still in the bus after the last bus station. Even though it is the last stop, some people don't get off the bus, and they are probably sleeping there :D
//
// Take a look on the test cases.
//
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// number([[10,0],[3,5],[5,8]]) should return 5
// number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) should retrun 17
// number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) Should return 21

let stops = [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]

function busTracker(busStops) {
  let total = 0;
  for (let i 0; i < busStops.length;) {
    total += busStops[0];
    total -= busStops[1];
  }
  return totl
}

console.log(busTracker(stops));
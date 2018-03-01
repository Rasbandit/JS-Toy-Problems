// Copying and Merging Objects
// Run each code block listed below and pay carful attention to the results of the console.log's

// You should observe that the objects are not being copied
// Both variables point to the same object and change the same values.
// This phenomenon is called 'passing by reference.'
// Look up Object.assign, it can be a solution to getting around this issue. It is also great a merging objects.

// Now lets put your Object.assign skills to the test.
// Using Object.assign create a new object that is the combination of 3 other objects.

// If you swap out all the objects in the code below with arrays you will see a similar phenomenon.
// Two ways to deal with arrays and reference is to use the spread operator '...' or .slice() method.

// let objOne = {
//   name: 'Bob Ross',
//   job: 'Joy Giver'
// }
// let objTwo = objOne;
// objTwo.job = "God Painter";
// console.log(objOne)



// function objectChanger(item) {
//   item.job = "Cardio Guru"
//   return
// }
// let obj = {
//   name: "Richard Simmons",
//   job: "Exercise Genie"
// }
// objectChanger(obj)
// console.log(obj)


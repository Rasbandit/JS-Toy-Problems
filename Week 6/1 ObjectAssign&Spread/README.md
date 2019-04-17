# Spread Operator Toy Problem

the purpose of this toy problem is to have students practice the spread operator.

Encourage the students to use a javascript environment to test their solutions(e.g. [repl.it](https://repl.it/)). Give students some time to attempt the problem on their own and then spend some time reviewing their solutions/questions regarding the problem


Toy Problem:
```
//CLONING OBJECTS-SPREAD
//Below are two objects: chuck, olderChuck. If you run the code you will see that chuck and olderChuck have the same age but we want to make olderChuck be older without having to make olderChuck from scratch.**HINT**:Use the spread operator.

//DO NOT TOUCH CHUCK!
let chuck = {
  name: "Chuck",
  age: 25
}

//CODE HERE
let olderChuck = chuck
olderChuck.age = 26


//CLONING OBJECTS-OBJECT.ASSIGN
//Now we need to create a new object called oldestAndCoolestChuck. Use the Object.assign function to combine oldestChuck and coolthings and save them to oldestAndCoolestChuck. **Be wary of the datatypes that Object.assign accepts**

//DON'T TOUCH OLDESTCHUCK OR THE COOLTHINGS
let oldestChuck= {
  name: "Chuck",
  age: 40
}
let coolThings = ["beard","sunglasses","motorcycle","a subcription to Nintendo Power Magazine"]

//CODE HERE
let oldestAndCoolestChuck


//CLONING ARRAYS
//Now we have arr1 and arr2 that we are trying to combine together. The issue is that arr3 is an array with a string as it's only item and arr4 is just a string. use the spread operator to ensure that arr3 = [1,2,3,4,5,6,7,8] & arr4 = [5,6,7,8,1,2,3,4]

//DON'T TOUCH THESE ARRAYS
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

//CODE HERE
let arr3 = [arr1,arr2]
let arr4 = arr2 +arr1



//BONUS ROUND: NESTED SPREAD
//now that you have fixed all of the values above using spread see if you can nest the spread operator to create a variable called arr5 with the value of:
// [1,2,3,4,[5,6,7,8[1,2,3,4,5,6,7,8[5,6,7,8,1,2,3,4]]],{name: 'Chuck', age:25},{name: 'Chuck', age: 26}]


//CODE HERE
let arr5 = []


//DON'T TOUCH THE CONSOLE LOGS, THEY WILL HELP YOU
console.log("chuck: ",chuck)
console.log("olderChuck: ",olderChuck)
console.log("oldestAndCoolestChuck: ", oldestAndCoolestChuck)
console.log("arr3: ",arr3)
console.log("arr4: ",arr4)
console.log("arr5: ",arr5)
```

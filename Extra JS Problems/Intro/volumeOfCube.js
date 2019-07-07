// Volume of box
// write a function that takes in 3 numbers (dimensions of a box) and finds the volume of the box and returns an object that puts the 3 values on an object with appropriate keys, and puts the volume on a 4th key, then returns the object.

// test data
// 5, 5, 5 returns {length: 5, width: 5, Height: 5, volume: 125}
// 3, 10, 12 retrns {length: 3, width: 10, Height: 12, volume: 360}

// Advanced 1
// make this a constructor function

// Advanced 2
// have the function check if any of the values are negative. if there is a negative, end the function and console.log with the negative value and a message telling the user it cant take negative numbers.

// Advanced 3
// have the function also calcute the surface area of the box and add the key and value to the ob

function Box(length, width, height) {
  let positive = true;
  if(length < 1) {
    console.log(`The length must be larger than 0: ${length}`);
    positive = false;
  }
  if(width < 1) {
    console.log(`The width must be larger than 0: ${width}`);
    positive = false;
  }
  if(height < 1) {
    console.log(`The height must be larger than 0: ${height}`);
    positive = false;
  }
  if(positive === false) {
    return;
  }
  this.length = length;
  this.width = width;
  this.height = height;
  this.volume = length * width * height;
  this.surfaceArea = ((length * width) + (length * height) + (width * height)) * 2;
}

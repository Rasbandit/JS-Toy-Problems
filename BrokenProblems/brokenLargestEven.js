// Find the largest Even number

let listOfNums = [2, 5, 8, 23, 765, 2341, 757, 143326, 5786, 678, 35, 27, 235, 765];


function largestEven(nums) {
  for (var i = 0; i < nums.length; i++) {
    var largestEven = 0;
    if (nums[i] % 2 === 1 && nums[i] < largestEven) {
      largestEven = nums[i];
    }
  }
  return largestEven
}

console.log(largestEven(listOfNums));

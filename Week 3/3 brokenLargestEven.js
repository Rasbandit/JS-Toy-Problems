// Find the largest Even number

const listOfNums = [2, 5, 8, 23, 765, 2341, 757, 143326, 5786, 678, 35, 27, 235, 765, 14332654];

function largestEven(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    var largestEven = 0;
    if (nums[i] % 2 === 1 && nums[i] < largestEven) {
      largestEven = nums[i];
    }
  }
  return largestEven;
}

console.log(largestEven(listOfNums));

// re write this using a filter to remove odds, then chain a .sort, then return the largest number

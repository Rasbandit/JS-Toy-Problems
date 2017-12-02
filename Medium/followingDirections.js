// Directions
// You have a very odd treasure map that describes the location of the treasure using only special characters. Specifically <>^v. Each arrow tells you to move in a specific direction. < is left, > right, ^ up, v down, in one unit increments (< moves you 1 to the left, and > moves you 1 to the right).

// Assume your starting location is on a grid at location 0,0. Write a program that will take a string as a parameter full of <>^v and use that to figure out your ending location

// example Solution
// <<<^^V> means you end up at location -2, 1


const directions = '<>V^V^V<^><V^>V<^><V>^>V<^<V^><^><V<^><V><^V><^><V^><V>^><V><^V<^^V<V><V<V^>^V<><^V<<<^V^^^V<>^<<^V>';

function tracker(dir) {
  const location = [0, 0];
  for (let i = 0; i < dir.length; i++) {
    if(dir[i] === 'v') {
      location[1]--;
    }
    if(dir[i] === '^') {
      location[1]++;
    }
    if(dir[i] === '<') {
      location[0]--;
    }
    if(dir[i] === '>') {
      location[0]++;
    }
  }
}

console.log(tracker(directions));

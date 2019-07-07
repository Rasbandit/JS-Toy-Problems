```let brack = {
  name:'Brack',
  hunger:50
}

let joe = {
  name:'Joe',
  hunger:40
}

let missy = {
  name:'Missy',
  hunger:30
}```

Let’s say that we have 3 objects.  brack joe and missy.  Each has a name and a hunger level on it.

We want to give all 3 of them an eatHamburger function that will decrease the hunger of the person who eats the hamburger.

One way we could do this is write 3 different functions.

```function brackEatsHamburger(){
  brack.hunger -= 10;
}

function joeEatsHamburger(){
  joe.hunger -= 10;
}

function missyEatsHamburger(){
  missy.hunger -= 10;
}```

The above works, but we have to write 3 different functions.

We could instead write a single function that takes in an object for to change who’s hunger decreases.

```function aPersonEatsAHamberger(person){
   person.hunger -= 10;
}

aPersonEatsAHamburger(brack);```

This works fine on it’s own.  But what happens when I put this function directly on each individual object

```brack.eatHamburger = aPersonEatsAHamburger
joe.eatHamburger = aPersonEatsAHamburger
missy.eatHamburger = aPersonEatsAHamburger```

Now all 3 of our objects have the ability to eat a hamburger.  But the way we would invoke these methods would be a little weird.

```brack.eatHamburger(brack)
joe.eatHamburger(joe)
missy.eatHamburger(missy)```

I have to use the object once to find the function.  And then pass that same object back in as a parameter to the eatHamburger function.

Also it makes it easier to make a mistake because if i enter
```brack.eatHamburger(joe)```

joe’s hunger will go down.  Even though I called brack’s function.

`this` to the resuce.

```function eatHotdog(){
  this.hunger -= 10;
}

brack.eatHotdog = eatHotdog
joe.eatHotdog = eatHotdog
missy.eatHotdog = eatHotdog```

now when I call something like `brack.eatHotdog()` it uses `this` to figure out which object I’m interacting with.  How does it know who is eating a hotdog?  By default it will look to the left of the function invocation.  If it is a method on an object,  it will set `this` equal to that object.

If the above doesn’t make a lot of sense right now it’s okay.  `this` is one of the trickier parts of javascript that will take some time for it to sink in and that’s okay
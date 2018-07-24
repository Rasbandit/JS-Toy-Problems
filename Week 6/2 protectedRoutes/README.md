# Guide

## Concept
In this repo we are going to set up a private route so you can not visit a page if you are not authorized.
This is done using primarily the `<Redirect to="" />` component and the render prop on a Route Component.


## Protected Route Component

### Using the Component
There is a lof of new going on here all at once. so first things to note is the use of the spread operator on the component. This is used on the render prop because it makes sure you have access to things like props.match and props.history, but wont put it all on one property. Next we pass the component itself down as a prop to the component as well as the value we are using to test if the user is authorized.

### Inside the Component
The actual `Route` component is imported here and is the only thing being returned to the routes page. We deconstruct off the component from pops and rename it to uppercase C Component because JSX components needs to be upper case, but it couldn't be upper case on the routes page because uppercase C conflicts with what we import form react b(exhale after run on sentence). its dumb, yes. We also destructure off the value loggedIn because we need that to see if they they are authorized to view the correct component.

- make login
- make route for it using render prop and pass down a function to set state on routes for login
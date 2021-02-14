// *************************************************************************
// Learn how to set default parameter values in JavaScript functions
//  *************************************************************************
// Prior to ES6, it wasn't possible to set default parameter values when defining
// our functions in JavaScript.In this lesson, we learn how to create default values
// to our function parameters.We also see a few examples of how this can come in
// handy in our applications.

function greeting(name) {
  return `Hello there ${name}`;
}

console.log("greeting(): ", greeting("John"));
console.log(greeting());

// in this first example we can see that greeting is returned with undefined as
// there are no default parameters

function greeting2(name = "Lydia") {
  return `Hello there ${name}`;
}

console.log("greeting(): ", greeting2("John"));
console.log("greetingWithDefault(): ", greeting2());

//  Another example
function createSuperHeroes(name, healthPoints = 100) {
  return `Your name is ${name} and you have ${healthPoints} health points`;
}

const superman = createSuperHeroes("Superman", 90);
const superwoman = createSuperHeroes("Superwoman");

console.log("createSuperHeroes(superman): ", superman);
console.log("createSuperHeroes(superwoman): ", superwoman);

// Default arguments are evaluated at call time. Means, every time an obj is created
//  let's see this with another example with an function that add item to a list.
// We set default parameters so that the list start as an empty array, where we will push the items
// You can see the the result is two different array, because every time the
// function is called, it's initiated with a new fresh empty array

function addListItem(item, list = []) {
  list.push(item);
  return list;
}
console.log("addListItem(): ", addListItem("banana"));
console.log("addListItem(): ", addListItem("apple"));

// *************************************************************************
// Learn what the Rest and Spread operators are in ES6
//  *************************************************************************

// What if we want to sum up values, but we are not sure how many there will be.
// This were the rest operator takes place. in the example we have to parameters (min)
//  and we use ...values to dynamically adjust the number of values, for when we call the function
// We set a sum variable with default parameter a + b
// we iterates over the array values created by the rest operator and we calculate the sum with
// each value, finally we return the sum. Now we can start the sum with 2min parameters and
// and many more, it will adjust accordingly to the amount of parameters will set when we call the function.

function sum(a, b, ...values) {
  let sum = a + b;
  values.forEach((value) => (sum += value));
  return sum;
}
console.log("sumWithRest(): ", sum(2, 5, 2, 3));

// ES6 also provide the spread operator

const user = { name: "John Doe" };
const cart = {
  items: [
    { name: "shirt", quantity: 1 },
    { name: "trousers", quantity: 2 },
  ],
};
const deliveryAddress = {
  street: "100 main street",
  city: "Miami",
  state: "FL",
};

// We can use the spread operator to build an object made of all the other newly created object

const purchase = {
  ...user,
  ...cart,
  ...deliveryAddress,
};

console.log("purchase(): ", purchase);

// *************************************************************************
// How to destructure Arrays and Objects in JavaScript ES6
//  *************************************************************************

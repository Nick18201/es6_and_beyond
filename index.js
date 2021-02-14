// *************************************************************************
//  Let's practice with some simple let and const variables
// *************************************************************************
// let and const variables are block scoped they are only define in the block
// they are declared in. They are also not initialized which can prevent errors

function checkPassword(password) {
  const valid = password.length >= 6;

  if (valid) {
    const message = "Your password is valid";
    console.log("checkPassword : " + message);
  } else {
    const message = "Your password is not valid";
    console.log("checkPassword : " + message);
  }
}

checkPassword("123");
checkPassword("123456");

// *************************************************************************
// Let's practice some arrow function
//  *************************************************************************

//  There is a short version of a function declaration that comes with ES6
function getInfo(name, age) {
  return `getInfo1(): Name: ${name} - Age: ${age}`;
}
console.log(getInfo("Lydia", 21));

// we start with a variable and let's pause and set some examples
const getInfo2 = (name, age) => {
  return `getInfo2(): Name: ${name} - Age: ${age}`;
};
console.log(getInfo2("Lydia", 21));

//  in this first function, there is just one line of code that must be applied
// So we can short by suppressing the return and the curly brackets
const getInfo3 = (name, age) => `getInfo3(): Name: ${name} - Age: ${age}`;
console.log(getInfo3("Lydia", 21));

// If we had only one parameter we can even short the function
const getInfo4 = (name) => `getInfo4(): Name: ${name}`;
console.log(getInfo4("Lydia"));

// Another example where you can see that arrow function doesn't allow to call
//  before it is initialize, like const and let variable are not defined by
// default so they cannot be referenced before being declared. With regular
// function you can call them before because they are
// already loaded in the computer's memory

console.log(greeting());
function greeting() {
  return "greeting(): Hey there!";
}

const greeting2 = () => "greeting(): Hey there again!";
console.log(greeting2());

// Arrow function have an impact on <this> keyword
// we will create a regular diameter function and an arrow diameter function
// and see that the arrow function return NaN (not a number) and it's because
// this.radius doesn't refer to the radius on the shape object but on the
// current scoped where we call it.

const shape = {
  radius: 10,
  diameter: function () {
    return this.radius * 2;
  },
  diameter2: () => this.radius * 2,
};

console.log("shape(): " + shape.diameter());
console.log("shape(): " + shape.diameter2());

// Another example where you can see that the bind method allow JS to know what
// is < this >, if we remove the bind, name will be undefined because the
// setTimeOut function doesn't have <name> property.
// With arrow functions that are bound on the object, there is no problem to call.name
//  Let's see this with hero2. The greeting method is called on the hero object.
//  Js knows that this.name refers to the name of the hero object because they live in the same scope
// Remember Arrow functions are bound to their context!!!

const hero = {
  name: "Super Man",
  greet: function () {
    setTimeout(
      function () {
        console.log("hero.greet(): Hi, my name is " + this.name);
      }.bind(this),
      1000
    );
  },
};
console.log(hero.greet());

const hero2 = {
  name: "Super Man",
  greet: function () {
    setTimeout(() => {
      console.log("hero.greet2(): Hi, my name is", this.name);
    }, 1000);
  },
};
console.log(hero2.greet());

// *************************************************************************
// Let's practice some template literals
//  *************************************************************************

// ES6 introduce template literals first let's see a simple translation

function sayHi(name) {
  return "sayHi(): Hello there, " + name;
}
console.log(sayHi("Lydia"));

//  First when using template literals, we use back ticks
function sayHi2(name) {
  return `sayHi2(): Hello there, ` + name;
}

console.log(sayHi2("Lydia"));

// With template literals you can suppress the + operator and embed the interpolation
//  inside the string

function sayHi3(name) {
  return `sayHi3(): Hello there, ${name}`;
}
console.log(sayHi3("Lydia"));

// In the previous case the expression was a passed argument <name> but expressions
// can be anything, by introducing a baseUrl const, you can interpolate the url from the API
// and avoir repetition and typos

const fetch = require("node-fetch"); // required for the fetch

const baseUrl = "https://swapi.dev/api"; // the url that drives us to the API endpoint

fetch("https://swapi.dev/api/people/1")
  .then((res) => res.json())
  .then((json) => console.log("simpleFetch(): ", json));

fetch(`${baseUrl}/people/2`)
  .then((res) => res.json())
  .then((json) => console.log("fetchWithBaseUrl(): ", json));

// Expressions can also return value from a function :
const sum = (a, b) => `sum(): ${a + b}`;
console.log(sum(1, 3));

// Template literals also allow multiline strings, before you had to use escape character
const result = "Sarah: 1\nPeter: 2";
console.log("result(): ", result);
// We can just keep on writing in our code with literals
const result2 = `
Sarah: 1
Peter: 2`;
console.log("result2(): ", result2);

// You can parse literals with a function
const greet = (greeting, name, age) => {
  console.log(greeting);
  console.log(name);
  console.log(age);
};

const name = "Lydia";
const age = 21;

greet`My name is ${name} and i am ${age}`;

// interpolation can be used with CSS, the example can be found in index.html

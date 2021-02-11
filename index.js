// *************************************************************************
//  Let's practice with some simple let and const variables
// *************************************************************************
// let and const variables are block scoped they are only define in the block
// they are declared in. They are also not initialized which can prevent errors

function checkPassword(password) {
  const valid = password.length >= 6;

  if (valid) {
    const message = "Your password is valid";
    console.log(message);
  } else {
    const message = "Your password is not valid";
    console.log(message);
  }
}

checkPassword("123");
checkPassword("123456");

// *************************************************************************
// Let's practice some arrow function
//  *************************************************************************

//  There is a short version of a function declaration that comes with ES6
function getInfo(name, age) {
  return `Name: ${name} - Age: ${age}`;
}
console.log(getInfo("Lydia", 21));

// we start with a variable and let's pause and set some examples
const getInfo2 = (name, age) => {
  return `Name: ${name} - Age: ${age}`;
};
console.log(getInfo2("Lydia", 21));

//  in this first function, there is just one line of code that must be applied
// So we can short by suppressing the return and the curly brackets
const getInfo3 = (name, age) => `Name: ${name} - Age: ${age}`;
console.log(getInfo3("Lydia", 21));

// If we had only one parameter we can even short the function
const getInfo4 = (name) => `Name: ${name}`;
console.log(getInfo4("Lydia"));

// Another example where you can see that arrow function doesn't allow to call
//  before it is initialize, like const and let variable are not defined by
// default. With regular function you can call them before.

console.log(greeting());
function greeting() {
  return "Hey there!";
}

const greeting2 = () => "Hey there again!";
console.log(greeting2());

// In order to see the impact of arrow function on <this> keyword
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

console.log(shape.diameter());
console.log(shape.diameter2());

// Another example where you can see that the bind method allow JS to know what
// is < this >, if we remove the bind, name will be undefined because the
// setTimeOut function doesn't have name property.
// With arrow functions that are bound on the object, there is no problem to call.name
//  Let's see this with hero2
const hero = {
  name: "Super Man",
  greet: function () {
    setTimeout(
      function () {
        console.log("Hi, my name is", this.name);
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
      console.log("Hi, my name is", this.name);
    }, 1000);
  },
};
console.log(hero2.greet());

// Remember Arrow functions are bound to their context !!!

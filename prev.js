// Variable Declaration
// let, const

// Data Types

// Number
// let no = 123;

// String
// let str = "Aseem Regmi";

// Boolean
// let boo = false;

// Null
// let nu = null;

// Undefined
// const und = undefined;

// let someVar;

// console.log(someVar);

// Conditionals

let num = 123;

if (num === "123") {
  console.log("NUMBER IS EQUAL");
} else if (num === 567) {
  console.log("NUMBER IS EQUAL TO 567");
} else {
  console.log("NUMBER IS NOT EQUAL");
}

// Object
const person = {
  name: "Aseem Regmi",
  age: 22,
  study: "CE",
  studyingSubjects: ["Physics"],
};

// Arrays
let subjects = ["Physics", "Chemistry", "Biology", "Math"];

// Array methods - forEach map filter
subjects.forEach((sub) => {
  console.log(sub);
});

console.log(subjects);

// Array Methods : pop, push, shift unshift, slice, splice
// console.log(subjects);

// getData();

// "this" keyword
// Functions - Two Types
function getData() {
  // Do the work
  console.log("FUNCTION CALLED");
}

// Arrow Function
// const abc = () => {};

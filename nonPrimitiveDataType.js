// There is only one non-primitive data type in javascript and that is object every
// i.Object literal
// ii.Arrays
// i.Function
// Behind the scene they all are object we will discuss it later

// object store data in key value pair

// HOW TO CREATE A OBJECT IN JS

const user = {}; //tHIS IS AN EMPTY OBJECT ||or object with no properties

user.name = "shiv"; //this will  add name as key and value as shiv

const user1 = {
  name: "shiv",
  "roll-no": 54,
}; //here user1(object) having two properties name and roll-no

console.log(user1["roll-no"]); //in js -"hyphen" is treated as minus sign so in order to access this we need to use [] (bracket notation)
console.log(user1["name"]);

console.log(user1.name); //normally we use dot to access and value of an objects property

// in js we can nest object inside object

const user2 = {
  name: "shiv",
  address: {
    city: "Bengaluru",
    state: "Karnataka",
    pin: 757037,
  },
}; //This is called nested object

console.log(user2.address.city); //This is called nested object property access

// we can see that each object has its own memory address

const shiv = ""; //@77
const ziv = ""; //@77

//lets debug this in devtool of chrome

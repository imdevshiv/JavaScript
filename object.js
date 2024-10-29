// Object data type

// create an empty object

a = {};

const user = {
  name: "shiv",
  rollNo: 20,
  detail: {
    school: "vcs",
    year: 2016,
  },
};
const b = "year";
// we can access object in two way with dot or with [] square bracket and key name
// console.log(user.detail[b]);

const user2 = user;

// delete user.name; to delete

// Object.seal(user) to restrict from deleting but allowed changing the value

// Object.freeze(user); doesn't allow any thing nor delete or change the value

//in keyword to check weather the key is present in object

// user2.name = "sankar"; //this is shallow copy

// const user1 = {};

// Object.assign(user1, user); //assign method for shallow copy

// const user1={...user} //es6 spreedOperator to shallow copy

// const user1 = structuredClone(user); //deep copy

// const user1 = JSON.parse(JSON.stringify(user)); //deep copy

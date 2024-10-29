// 1.Reverse a String

const revString = (name) => {
  let revName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    revName += name[i];
  }
  return revName;
};
const string = "shiv";
console.log(revString(string));

// es6

const rev=(name)=>name.split('').reverse().join('')

// split("") converts "shiv" into ["s", "h", "i", "v"].
// reverse() then reverses the array to ["v", "i", "h", "s"].
// join("") then joins the characters back into a single string, producing "vihs".

console.log(rev("shiv"))




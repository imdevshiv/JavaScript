// Find Duplicates in an Array: Given an array of integers, return the duplicates.

const dArrays = (a) => {
  let d = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j] && !d.includes(a[i])) {
        d.push(a[i]);
      }
    }
  }
  return d;
};
const a = [2, 1, 1, 1, 3, 2];
console.log(dArrays(a));

// One line Example
const dArr = (b) => [...new Set(b.filter((item, index) => b.indexOf(item) !== index))];

const d=[1,1,1,2,5,2]
console.log(dArr(d))
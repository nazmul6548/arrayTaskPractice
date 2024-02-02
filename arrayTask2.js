// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 78, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];
let myStore = [];
for (let i = 0; i < numbers.length; i++) {
  const x = numbers[i];
  if (x % 2 === 0) {
    myStore.push(x);
    console.log(x);
  }
}
console.log(myStore);
// console.log(Array.isArray(numbers));

// for while

let store = [];
let me = 0;

while (me < numbers.length) {
  const myNu = numbers[me];
  // console.log(myNu);
  if (myNu % 2 === 0) {
    store.push(myNu);
  }
  me++;
}
console.log(store);

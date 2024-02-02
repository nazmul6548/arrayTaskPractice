// Task 3
// Use a for...of loop to concatenate all the 
// elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'
// ans:

var numbers = ["Tom", "Tim", "Tin", "Tik"];
var ans = "";

for (const after of numbers) {
  ans = ans + after;

  // console.log(after);
}
console.log(typeof ans);
console.log(ans);

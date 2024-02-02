// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of
// the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

// ans:
const statement = "I am a hard working person";
let result = statement.split(" ");
let finalResult = result.reverse();
console.log(finalResult.join(" "));
// 


let z = 6;
let x = 7;
let y = 8;
if (z < x) {
  if (x < y) {
    console.log("conditon is true");
  } else {
    console.log("2nd condition is false");
  }
} else {
  console.log("invalid condition");
}

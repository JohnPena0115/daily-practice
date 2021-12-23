/* 

https://edabit.com/challenge/sWAEoTbXA4bexBPb6

You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2

With ES6, you can assign variables from arrays in a much more succinct way. 
Create variables a and b from the given array using the ES6 destructuring 
assignment syntax.

The problem ended up being relatively simple but it was a simple problem 
that reminded me of a potentially useful tool. 

*/

const arr = [1, 2, 3, 4, 5, 6]

let [firstIndexValue, secondIndexValue] = arr
/* 


This function was inspired by one half of a coding challenge on Edabit. Below were our instructions: 

You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

I had been exposed to a similar problem before so I was able to navigate this problem more smoothly. 
The prior problem asked us to create a function, that given an integer argument, would return 
the sum of adding up all of the integer's digits together. The key to solving that problem 
was isolating each digit for the given numeric. I implemented that methodology in the first 
while loop. The rest of the function was novel, and thankfully, involved a simple process of 
trail and error. 

reverseString was originally numericString but when I realized the function was outputting 
72 as oppose to 27 I went back to the drawing board. 

Known limitations => the function does not check to see if the argument provided is actually 
a number.

I have yet attempted to implement logic to hand negative int arguments. 
I will work on this in future revisions. 



*/

let int = 24 

let string = ""

string += int 

console.log(int)
console.log(string)



// function intToString(int) {

//     let reverseString = ""

    

    // let negativeInt = false 

    // if (int < 0) {

    //     negativeInt = true 
    // }

    // if (int < 10 && int > -10) {

    //     return reverseString += int

    // }  

    // while (int / 10 > 0) {

    //     reverseString += int % 10

    //     int = Math.floor(int / 10)

    // }




    // let stringIndexTracker = reverseString.length - 1

    // let numericString = ""

    // while (stringIndexTracker > -1) {

    //     numericString += reverseString[stringIndexTracker]

    //     stringIndexTracker--
    // }

    // return numericString
// }

// console.log(intToString(27))
// console.log(intToString(124567))
// console.log(intToString(6))
// console.log(intToString(0))

// console.log(typeof(intToString(-3)))

/* 

Revisions => 12/19 

1) Change the parameter num to int 

2) Realized that the segments of code down belown were redundant ... 
    

a) 

   
   if (int === 0){

        return reverseString += int

      }

    
b) 

     if (reverseString.length === 1){

        return reverseString 

     }

Combined them together to make code more efficient 

     if (int < 10) {

        return reverseString += int 
     }


Revision 2 => 12-20-19 

So it turns out the whole program was for naught. 

When trying to make my program robust against negative int arguments  
I accidentally discovered implicite string conversion. 

I wrote the following code: 

if (int < 0 && int > -10) {

    reverseString += "-"
    return reverseString += int 
}

Imagine my surprise when I console.logged intToString(-3) and received an output 
of "--3"

I had to laugh at myself realizing this program could have been written in 
two lines. 

It makes me wonder why bother having String() or toString() when you can 
easily typecast a number using the "+=" operator. This program might never 
have been a comedy of erros but it was definitely a comedy of assumptions. 

For the sake of prosperity, a good laugh, and becuase I've already done most of the legwork, 
I will suspend reality and assume "+=" implicit string conversion can only work 
on a single numerical digit and not on a series of numerical digits/tokens. I will implement 
the changes for this version of the program at a later date. 


*/
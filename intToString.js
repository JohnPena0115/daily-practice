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



*/



function intToString(num) {

	let reverseString = ""

    if (num === 0){

        return reverseString += num

    }
	
	while (num/10 > 0) {
		
		reverseString += num % 10

        num = Math.floor(num/10)
		
	}

    
    if (reverseString.length === 1){

        return reverseString

    } else {


        let stringIndexTracker = reverseString.length - 1
    
        let numericString = ""

         while (stringIndexTracker > -1 ){

             numericString += reverseString[stringIndexTracker]

            stringIndexTracker--
         }

         return numericString
    }

    
	
}

console.log(intToString(27))
console.log(intToString(124567))
console.log(intToString(6))
console.log(intToString(0))
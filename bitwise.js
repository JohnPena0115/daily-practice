 /* 
 
 The following was inspired by an edabit exercise:  

 https://edabit.com/challenge/vvuAkYEAArrZvmp6X 

 I had no exposure to bitwise operators so I had to take my time going 
 through the resources tab for this particular exercise. By the time 
 I actually put pen to paper I mistook the following example as the 
 intended output of the code: 

a) 

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001

In reality, Edabit wanted the following to be the 
intended output 

b) 

bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11
 
b) was much simplier to execute though I enjoyed the challenge a)
presented as I had to juggle three new concepts: the bitwise operators, 
toString() and padStart()

I also learned the importance of declaring the andOutput variable inside 
the function as oppose to the global context when I tried to run 
bitwiseAnd twice and get an unintended result. 

The solution to b) ended up being 

function bitwiseAND(n1, n2) {
	
	return n1 & n2 
}

but I was glad I misread the intended output. 

Known limitations: the following program will not do well with decimal arguments greater than 
255. A future goal to work on. 

 */
 

function bitwiseAnd(n1, n2) {
	
	let andOutput = ""
	
	let tracker = 0 

	let binaryConversion1 = n1.toString(2).padStart(8, 0)

	let binaryConversion2 = n2.toString(2).padStart(8, 0)

	while (tracker < binaryConversion1.length){
    
    	if (binaryConversion1[tracker] === "1" && binaryConversion2[tracker] === "1") {
			
			andOutput += 1
		
		}else {
		
			andOutput += 0
		}

	tracker++
}

    return `The bitwise And output of decimal numbers ${n1} and ${n2} is 
			
			decimal: ${parseInt(andOutput, 2)} 
			binary:  ${andOutput}
			
			`
	
}

console.log(bitwiseAnd(5, 3))
console.log(bitwiseAnd(10, 9))

/* 

bitwiseAnd(300, 890) demonstrates a limitation of this 
program. The output should be 296 but the function outputs 
300 so to work with decimal numbers greater than 255, the max 
output for 1 byte of binary digits, the function would have to 
be further refined. 

*/

console.log(bitwiseAnd(300, 890))



console.log(300 & 890)
 

 


 
// Delete below when you write the last two functions in the format up above 


// function bitwiseAND(n1, n2) {
	
// 	let decimalAndOutput = n1 & n2 
	
// 	let binaryAndOutput = decimalAndOutput.toString(2).padStart(8, 0)
	
// 	return binaryAndOutput
// }

// function bitwiseOR(n1, n2) {
	
// 	let decimalOrOutput = n1 | n2 
	
// 	let binaryOrOutput = decimalOrOutput.toString(2).padStart(8,0)
	
// 	return binaryOrOutput
	
// }

//https://edabit.com/challenge/vvuAkYEAArrZvmp6X

// function bitwiseXOR(n1, n2) {
	
// 	let decimalXOROutput = n1 ^ n2
	
// 	let binaryXOROutput = decimalXOROutput.toString(2).padStart(8,0)
	
// 	return binaryXOROutput 
	
// }
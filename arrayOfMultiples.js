/* 

Create a function that takes two numbers as arguments (num, length) and 
returns an array of multiples of num until the array length reaches length.

arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

*/

function arrayOfMultiples (num, length) {
	
	let outputArray = []
	
	let multiple = 1; 
	
	while (i < length + 1){
		
		outputArray.push(num * multiple)

		multiple++;
	}
	
	return outputArray
	
}
/* 

Create a function that takes two numbers num1, num2, and an array arr and returns
 an array containing all the numbers in arr greater than num1 and less than num2.

 arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

*/ 


function arrBetween(num1, num2, arr) {
	
	let inequality = []
	
	for (let i = 0; i < arr.length; i++){
		
		if (arr[i] > num1 && arr[i] < num2 ) {
			
			inequality.push(arr[i])
		}
	}
	
	return inequality
	
}
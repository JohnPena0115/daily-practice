/* 

Create a function that takes an array of integers and strings. 
Convert integers to strings and return the new array.

Return [] if array is empty.

*/

function parseArray(array) {
	
	if (array.length === 0){
		
		return []
		
	}
	
	let intToString = 0 
	
	for (let i = 0; i < array.length; i++){
		
		if (typeof array[i] === "number") {
			
			intToString = array[i]
			array[i] = ""

            //Using the string concatenation operator we convert the int
            //value stored in intToString into a string value stored 
            //in array[i]. Note this only works if array[i] already 
            //has a string value. Comment out line 25 if you would like 
            //to see the difference. 

			array[i]+= intToString
		}
	}

	return array
	
}

console.log(parseArray([1, "2", 3, "4", 5]))
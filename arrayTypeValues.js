/* 

Create a function that takes an array and returns 
the types of values (data types) in a new array.

*/

function arrayDataTypeValues(array) {
	 

    //Stores the return values
	let output = [] 
	
    //Seeks the data type of each array index value
    //Populates output 
	for (let i = 0; i < array.length; i++){
		
		output.push(typeof arr[i])
		
	}
	
	return output
		

}

    /*

    Alternate way => 

	    const output = array.map(value => typeof value) 
		return output
		
    */
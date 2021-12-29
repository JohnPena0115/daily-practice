function check(array, value) {

	//Checks to see if an empty array was provided as an argument 
	if (array.length == 0){
		
		return false
		
	}

	//Traverses through the array. 
    //Compares value of current index with value of second argument
	for(let i = 0; i < array.length; i++){
		
		if (array[i] === value) {
			
			return true 
		}
	}
	
    //Returns false if neither of the two if conditionals up above 
    //evaluates to true 
	return false 
	
}
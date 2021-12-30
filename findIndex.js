function search(array, value) {
	
    //Assures that values of type string do not have 
    //leading or ending white spaces
	if (typeof value === "string"){
		
		value.trim();
	}

	//Traverses array seeking match between the value of the current 
    //index and the value of the second argument 
	for(let i = 0; i < array.length; i++){
		
		if (array[i] === value) return i
	}
	
    //If no match is found 
	return -1

}
/* 

Create a function that takes a base number and an exponent number and returns the calculation.

*/ 

function calculateExponent(num, finalExponent) {
	
	let currentValue = num 
	
	let currentExponentValue = 2

    
    if (finalExponent === 0) {

        return 1; 
    }
    

	while (currentExponentValue < finalExponent + 1 ) {
		
		currentValue *= num 
		
		currentExponentValue++
	}
	
	return currentValue 
			 
}
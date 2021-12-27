/* 

Create a function that takes a number n and returns the nth 
even number beginning with 0 as the first.

nthEven(1) ➞ 0
// 0 is first even number

nthEven(2) ➞ 2
// 2 is second even number

nthEven(100) ➞ 198


*/

function nthEven(value) {
		
	let evenAccumulator = 0 
	
	let evenTracker = 1
	
	while (evenTracker < value) {
		
		evenAccumulator += 2
		evenTracker++
	}
	
	return evenAccumulator
	
}

/* 

    Alternate way of doing it ... 


    if (n == 1) {

	    return 0 
	
    } else {

	    return (n-1)*2
    }

*/
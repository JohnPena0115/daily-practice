function num_of_digits(num) {
	
	let numLength = 1; 
	
	if (num < 0 ){
		
		num = num * -1
	}
	
	while (num/10 >= 1) {
		
		numLength++
		
		num = num/10
		
	}
	
	return numLength
}

/* 

I used the number 12 to think this problem through. 

Initializing numLength to 1 took care of single digit int input
arguments but it also assured I was not off by 1 digit from ints 
10 or greater. 

Converting negative int arguments to positive by multiplying by -1 
assured I could use my while loop to get the length of any int 
less than 0. 

Setting the while conditional to "num/10 >= 1" assured that 
any numbers of 1 * 10^x would be correctly processed. 


*/
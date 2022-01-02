/* 

This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 

matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

Step 0 returns 0 matchsticks.

Think of the input (step) as the total number of houses that have been connected together. 


*/

function matchHouses(step) {
	
    // In Js, 0 is read as false. So if step ever equalled 0, 
    // !0 / !false / !step would evaluate to true 
	if (!step) {
		
		return 0 
	}
	
	return 6 + (5 * (step-1))
	
}
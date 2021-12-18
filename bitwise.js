
let six = "00000110"
let twenty_three = "00010111"
let andOutput = ""

function bitwiseAND(n1, n2) {
	
	let tracker = 0
	
	while (tracker < n1.length) {
		
		if (n1[tracker] === "1" && n2[tracker] === "1") {
			
			andOutput += 1
			
		}else {
			
			andOutput += 0
		}

        tracker++
	}

    return andOutput

     
	
}

let five = 6

console.log(5 & 6) 
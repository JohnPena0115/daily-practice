 
 function stringLength(string) {

    if (string === ""){

        return 0 

    } else {

        return stringLength(string.slice(1)) + 1

    }
}

 
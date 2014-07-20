//Write a function called calculate that takes 3 values. 
//The first and third values are numbers. The second value is 
//a character. If the character is "+" , "-", "*", or "/", the 
//function will return the result of the corresponding 
//mathematical function on the two numbers. If the string is 
//not one of the specified characters, the function should 
//return null.

function calculate(num1, operation, num2) {
    if (operation === "+") {
    	return num1 + num2;
    } 
    if (operation === "-") {
    	return num1 - num2;
    }
    if (operation === "/") {
    	return num1 / num2;
    }
    if (operation === "*") {
    	return num1  * num2;
    }
    if (num2 === 0) {
    	return null;
    } else {
    	return null;
    }
}
 

/** 
* @file APP JS Lab 1: Basics 
* @author Tim Orman
* @description JS file containing functions for students to complete. Fill in the blanks.
*/

/** @function decNumeric() - declare a numeric value */
function decNumeric(){
	//declare var called numVar below 
	var numVar;
	//set its value to 22
	numVar = 22;
	//do not alter
	return numVar;
}

/** @function decString() - declare a string value */
function decString(){
	//declare var called strVar below 
	var strVar;
	//set its value to 'Hello APP!'
	strVar = 'Hello APP!'
	//do not alter
	return strVar;
}

/** @function decBoolean() - declare a boolean value */
function decBoolean(){
	//declare var called booVar below 
	var booVar;
	//set its value to true
	booVar = true;
	//do not alter
	return booVar;
}

/** @function arithmeticOp() -  take two values and multiply them and return the value */
function arithmeticOp(valA, valB){
	//var to hold return value
	var retVal;
	// write code to multiply valA and valB and assign the value to retVal
	retVal = valA * valB;
	
	//do not alter
	return retVal;
}

/** @function stringOp() -  take two strings, concatenate them and return the resulting string */
function stringOp(strA, strB){
	//var to hold return value
	var retStr;
	// write code to concatenate strA and strB with a space in between and assign the value to retStr
	retStr = strA+' '+strB;
	//do not alter
	return retStr;
}

/** @function compOP() - take two values and check if A is less than B and return boolean result (true if A less than B) */
function compOp(valA, valB){
	//var to hold return value
	var retVal;
	// write code to test if valA is less than valB and assign the boolean value to retVal
	retVal = valA < valB;
	//do not alter
	return retVal;
}

/** @function logicOp() -  take four values and do various comparison operations and return the result */
function logicOp(valA, valB, valC, valD){
	//var to hold return value
	var retVal;
	// write code to test if (valA is less than valB) AND (valC is equal to valD) and assign the value to retVal
	retVal = valA < valB && valC == valD;
	
	//do not alter
	return retVal;
}

/** @function changeStrToNumber() -  take a string and convert it to a number (any number) */
function changeStrToNumber(strToConvert){
	//write the code to convert strToConvert to a number (e.g. 5)
	var strToConvert = parseInt(strToConvert);
	//do not alter
	return strToConvert;
}
//convertStrToNumber("Hello World!");

/** @function castStrToNumber() take two strings and cast them to numbers then add them and return the result */
function castStrToNumber(strValue1, strValue2){
	//var to hold return value
	var retVal;
	//write code to convert both input values to numbers
	var strValue1 = parseFloat(strValue1);
	var strValue2 = parseFloat(strValue2);
	//write code to add the values and put the result into retVal
	retVal = strValue1 + strValue2;
	//do not alter
	return retVal;
}


/** @function msgConsole() -  write a message to the console log and return the vlaue reurned from the log function */
function msgConsole(){
	//declare a variable called strVar below
	var strVar;
	//write "Hello APP!" to the console log and put the return value into strVar
	strVar = console.log("Hello APP!");
	//do not alter
	return strVar;
}

/** @function callAlert() -  call an alert and return value of the call */
function callAlert(strMsg){
	//var to hold return value
	var retVal;
	//write code to call an alert making its message = strMsg.
	retVal = alert(strMsg);
	//do not alter
	return retVal;
}


/** @function returnArray() - take in single values and return them as an array */
function returnArray(var1, var2, var3, var4){
	//write code to put the passed values into an array called retArray
	var retArray = [var1, var2, var3, var4];
	//do not alter
	return retArray; 
}


/** @function arrayPop() -  takes in an array and returns a copy of the array with the last element removed */
function arrayPop(arrToPop){
	//write code to copy the passed array, remove the last element from the new array and to then return the shortened array
	var retArray;
	arrToPop.pop();
	retArray = arrToPop;
	//do not alter
	return retArray;  
}

//@function - Advanced task: write a code in the getInput function that takes a user's name and tells them the date. 
/*
function getInput(){
	
}
//don't forget to call the function
*/
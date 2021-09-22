/** 
* @file APP JS Lab 2: Selection and Loops 
* @author Tim Orman
* @author Suzy Atfield-Cutts
* @version 2021
* @description JS file containing functions for students to complete. Fill in the blanks.
*/
//Try writing code with strict mode on and off (comment it out).
"use strict";


/** @function workoutTax001() - write code in this function that takes the salary 
 * amount as a parameter, and calculates the tax payable at a rate of 30%. If 
 * the salary is over £45000 add an extra £5000 to the tax. Subtract the tax from 
 * the original salary to get the net salary amount. The function should return an 
 * array containing the total amount of tax at index 0 and the net salary at index 1.
 * @param	{number}   numSalary 	amount of salary as a number
 * @return	{number[]} array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax001(numSalary) {
	var arrReturn = [];  /*Assigning Variables*/
	var extra = 0;
	if (numSalary > 45000) 
	{
	extra = 5000;
	}
	var tax = numSalary * .3; /*calculating tax by multiplying the salary by the tax amount (30%)*/
	var totalTax = tax + extra;
	var netSalary = numSalary - totalTax;
	arrReturn.push(totalTax);/*appends totalTax to the end of array arrReturn*/
	arrReturn.push(netSalary);/*appends netSalary to the end of array arrReturn*/
	return arrReturn;
}


/** @function calculateTax001() - write code in this function to prompt a user to enter 
 * their salary. Call the workoutTax001 function to calculate the total tax and 
 * net salary. Display the results in an alert message to the user. 
 * NOTE: This function is not tested, it just provides user interaction. 
 * i.e.: DONT FORGET to call the function!!
*/

/*calculateTax001()*/
function calculateTax001() {
	var extra = 0;
	var salary = parseFloat(prompt("Enter Salary :")); /*Asks for user input in prompt box.*/
	if (salary > 45000) {
		extra = 5000;
	}
	var tax = salary * .3; /*calculating tax by multiplying the salary by the tax amount (30%)*/
	var totalTax = tax + extra; 
	var netSalary = salary - totalTax;
	alert("Your salary is : £"+netSalary); /*Sets alert box message to this string + Taxed salary.*/

	 //DONT FORGET to call the function!!

}
//call the calcTax001 function to run it!


/** @function workoutTax002() - write code in this function to take salary amount 
 * as a parameter. Calculate the tax payable at a rate of 30% if the salary is less 
 * than £45000. Calculate the tax at a rate of 50% if the salary is £45000 or more. 
 * The function should return an array containing the total amount of tax at index 0 
 * and the net salary at index 1.
 * @param  {number}   numSalary amount of salary as a number
 * @return {number[]} array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax002(numSalary) {
	var arrReturn = [];
	var taxFigure = 0;
	if (numSalary < 45000) { /*If paramater Salary is less then 45000*/
	taxFigure = 0.3;
	}
	else { /*else paramater Salary is More then 45000*/
		taxFigure = 0.5;
	}
	var totalTax = numSalary * taxFigure; /*calculating tax by multiplying the salary by the tax % amount (defined by taxFigure in if statement)*/
	var netSalary = numSalary - totalTax;
	arrReturn.push(totalTax); /*appends totalTax to the end of array arrReturn*/
	arrReturn.push(netSalary); /*appends netSalary to the end of array arrReturn*/ 
	return arrReturn;
}
/** @function workoutTax003() - write code in this function to take the salary 
 * amount as a parameter, and calculate payable tax at rates of:
 *  - 15% if salary is below £30000
 *  - 30% if salary is in the range from £30000 up to but below £45000
 *  - 50% if salary is £45000 or more. 
 * It should return an array containing the total amount of tax at index 0 
 * and the net salary at index 1.
 * @param  {number}   numSalary amount of salary as a number
 * @return {number[]} array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax003(numSalary) {
	var arrReturn = [];
	var taxFigure = 0;
	if (numSalary < 30000) {
	taxFigure = 0.15;
	}
	else if (numSalary >= 30000 && numSalary < 45000) {
		taxFigure = 0.3;
	}
	else {
		taxFigure = 0.5;
	}
	var totalTax = numSalary * taxFigure;
	var netSalary = numSalary - totalTax;
	arrReturn.push(totalTax);
	arrReturn.push(netSalary);
	return arrReturn;
}

/** @function checkSwitch() - write code in this function to use a switch statement 
 * to return a message based on the number passed in:
 *  1 - returns "SNAP"
 *  2 - returns "CRACKLE"
 *  3 - returns "POP"
 *  4 - returns "EXIT"
 *  default - "DEFAULT"
 * @param  {number} numChoice message selector as a number
 * @return {string}	message to be returned (determined by value of parameter)
*/
function checkSwitch(numChoice) {
	var msgReturn;
	switch (numChoice){ /*switch statement to see which number numChoice is assigned*/
	case 1:
		msgReturn = ("SNAP");
		break;
	case 2:
		msgReturn = ("CRACKLE");
		break;
	case 3:
		msgReturn = ("POP");
		break;
	case 4:
		msgReturn = ("EXIT");
		break;
	default: /*if the variable is not between 1-4, routed here.*/
		msgReturn = ("DEFAULT");
	}
	return msgReturn;
	}

/** @function whileLoop() - write code in this function to remove all the elements 
 * beyond the 5th element from the array (which is passed in to the function as a 
 * parameter). 
 * @param	arrToProcess 	the original array to be processed
 * @return	newArr			an array which is a copy of the first 5 elements of the 
 * 							original.
*/
function whileLoop(arrToProcess) {
	while (arrToProcess.length > 5) {
		arrToProcess.pop();
	}
	//use passed array as we want to shorten the same array passed in
	return arrToProcess;
}


/** @function doLoop() - write code in this function to return an array filled with 
 *  numbers ordered consecutively from 1, up to and including, the value of the 
 *  parameter (numElements).
 *  @param	{number}   numElements number of elements to be stored in the array
 *  @return {number[]} an array which contains numbers from 1 to numElements in order.
 */
function doLoop(numElements) {
	var count = 1;
	var numArray = [];

	do {
		numArray.push(count);
		count++;
	}
	while(count != numElements) {
		numArray.push(count);
		count++;	
	}
	return numArray;
}

/** @function forLoop() - write code in this function to iterate through the array
 *  and to add 1 to each numeric element of the array (which is passed in as a parameter).
 * NOTE: In the first test: The array contains only numeric elements. 
 * However, in the second test: The array contains some numeric elements, and some 
 * non-numeric elements. 
 * HINT:the typeof operator might come in handy! 
 * 		https://www.w3schools.com/js/js_type_conversion.asp
 * @param  {*[]} arrToProcess 	array to be processed
 * @return {*[]} array after processing, with the value of all numerical 
 * 							elements being 1 greater than in the original array.
*/
function forLoop(arrToProcess) {
	var count;
	for(count = 0; count < arrToProcess.length; count++) {
		if (typeof arrToProcess[count] == 'number') {
			arrToProcess[count] = arrToProcess[count] + 1;
		}
	}
	return arrToProcess;
}

/** @function splitString() - write code in this function to process the parameter. 
 *  The parameter is a comma separated string of words. Call a function to split  
 *  the words of the comma searated string, and place each piece into an element 
 *  of the array, and return the array. 
 *  Then use a loop to add an order number followed by a "." in front of each 
 *  element item e.g. "1.Dog" (no space). 
 *  Which loop should you use? See the lecture slides (Going loopy) 
 *  to help you select the best type of loop to use.
 *  @param	{string}   arrToProcess 	comma separated string of words
 *  @return	{string[]} array of strings
*/
function splitString(arrToProcess) {
	var arraysplit;
	var count;
	arraysplit = arrToProcess.split(",");
	for(count = 0; count < arraysplit.length; count++) {
		arraysplit[count] = (count+1)+"."+arraysplit[count];
	}
	return arraysplit;
}

/** @function makeString() - write code in this function to concatenate the elements 
 *  of an array (parameter) into a string, and return the new string. 
 *  Put a space between each element (string) in the return string. 
 *  The sentence should start with a capital letter and end with a full stop.
 *  @param	{string[]} arrToProcess array of strings
 *  @return {string}   formatted string
*/
function makeString(arrToProcess) {
	var str = arrToProcess.join();
	str = str.replace(/,/g, " ");
	str = capitalizeFirstLetter(str)
	return str;
}
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)+".";
	}

/** @function displayObject() - write code in this function to print out the 
 * contents of the object which is passed in as a parameter. Use a loop 
 * to complete the task (rather than casting the object to a string). 
 * Which loop should you be using for iterating through objects?
 *  @param	{object}  objInventor object containing data about a person who 
 * 					  is an inventor of a programming language.
 *  @return	{string}  String representing an Object
*/
function displayObject(objInventor) {
	var strObject = "";
	var count;

	for(count=0; count < Object.values(objInventor).length; count++) {
		strObject = strObject + Object.values(objInventor)[count] + " ";
	}
	
	strObject = strObject.substr(0, strObject.length-1); /*removes final space added*/

	//return processed array
	return strObject;
}


/** @function makeString2() - write code in this function to concatenate the 
 *  elements of the array (passed in as a parameter) into a string, and return 
 *  the new string. Put a space between each element in the return string. 
 *  If none of the punctuation marks in the second array (parameter)
 *  are found at the end of the string, add a full stop at the end of the string.
 *  If punctuation is found at the end of the string remove any spaces before it 
 *  eg: so that "the sentence !" becomes "the sentence!".
 *  @param	{string[]} arrToProcess 	array of strings
 * 	@param	{string[]} arrPunctMarks	array of puntuation marks
 *  @return {string}   reformatted string
*/
function makeString2(arrToProcess, arrPunctMarks){
	var strToProcess = "";
	strToProcess = arrToProcess.join(" ");
	if (arrPunctMarks.includes(strToProcess[strToProcess.length-1])) {
		if (strToProcess.charAt(strToProcess.length-2) == " ") {
			strToProcess = strToProcess.substr(0,strToProcess.length-2) + strToProcess.substr(strToProcess.length-1,strToProcess.length);
		}
	}
	else {
		strToProcess = strToProcess+".";
	}
	strToProcess = strToProcess.charAt(0).toUpperCase() + strToProcess.slice(1);
	return strToProcess;
}
/***********************************************************************/
/** @function advancedFunction() - NOT TESTED. 
 * 	write code in this function to get the user to input between 3 and 6 numbers.
 *  Then use these numbers to select words from a list of words 
 *  eg: arrWordList = ["once", "upon", "a", "car", "boat", "train", "tree", "bird", "cat", "elephant", "their", "mine"]; 
 *  and make a 'sentence' (String) with them. The first letter of a sentence 
 *  should be uppercase and a full stop should be added to the end. Syntax and 
 *  meaning is not important. The function should use the length of the list of 
 *  words to help prompt users avoid putting in values higher than the last word  
 *  the list. 
**/
/* uncomment to use
function advancedFunction(){
	
	//return strReturn; 
}
*/
//advancedFunction();

/*
/** @function checkSwitchAdvanced() - NOT TESTED
 * Just like in checkSwitch() function - write code in this function to use a
 * switch statement return a message based on the passed number:
 * This time ...
 *  1 - returns "SNAP CRACKLE POP"
 *  2 - returns "CRACKLE POP"
 *  3 - returns "POP"
 *  4 - returns "EXIT"
 *  default - "DEFAULT"
 * REMEMBER THE DRY PRINCIPLE - You can only use the words 'SNAP' 'CRACKLE' and
 * 'POP' once in the code.
 * You need to call the function to run it.
 * The function calls are below the function with a variety of values for testing.
 * Just remove the comments notation when you are ready to test.
*/
/*
function checkSwitchAdvanced(numChoice){


}
*/

//checkSwitchAdvanced(1);
//checkSwitchAdvanced(2);
//checkSwitchAdvanced(4);
//checkSwitchAdvanced(111);


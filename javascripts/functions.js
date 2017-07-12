"use strict";
console.log("functions.js");

let returnNothing = function(){
	console.log("hey you called me");
}

function returnNothing2(){
	console.log("hey you called the second one");
}

returnNothing();
returnNothing2();


function addStuff(){
	let sum = 2 + 2;
	return sum;
}

console.log("addStuff", addStuff());
// console.log("sum", sum);

function add (n1, n2){
	return n1 + n2;
}

console.log("add", add(124,373));

function subtract (taco, n2){
	return taco - n2;
}

function performCalculation(n1, n2, action){
	let doneIt = action(n1,n2);
	return doneIt;
}

let addValues = performCalculation(4,12,add);
console.log("addValues", addValues);
let subtractValues = performCalculation(10,2,subtract);
console.log("subtractValues", subtractValues);
















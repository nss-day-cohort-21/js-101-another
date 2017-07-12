"use strict";

let skyIsBlue = false;
if (!skyIsBlue){
	console.log("Yeah the sky is blue");
}else {
	console.log("Hmmm what color is the sky?");

}


let jedi = ["Skywalker", "Yoda", "Obi-wan", "Qui-Gon", "Windu"];
let jediText = "";

console.log("howmany jedi", jedi.length);

for (let potato = 0; potato < jedi.length; potato++){
	console.log("what is potato", potato);
	jediText += `<li>"what is this" ${jedi[potato]}</li>`;
}
console.log("jediText", jediText);

document.getElementById("demo").innerHTML = jediText;

let colors = ["red", "yellow", "blue", "green", "orange", "purple"];
let reverseColors = colors.reverse();
console.log("reverseColors", reverseColors);

let sortedColors = colors.sort();
console.log("sortedColors", sortedColors);

let numbers = [2, 4, 100, 33, 54, 1, 6];
// console.log("sort numbers", numbers.sort());
console.log("numbers", numbers);
let sortedNumbers = numbers.sort(function(first, second){
	console.log("first:", first, "second:", second);
	console.log("first minus second", first - second);
	return first - second; 
});

console.log("sortedNumbers", sortedNumbers);

let joinedColors = colors.join(",");
console.log("joinedColors", joinedColors, typeof(joinedColors));

let fruits = ["Peaches", "Orange", "Lemon", "Banana", "Mango"];
let citrus = fruits.slice(1, 3);
console.log("citrus", citrus, fruits);

fruits.push("Strawberry");
console.log("new fruits", fruits);

let whatItem = fruits.pop();
console.log("whatItem", whatItem);


// Write a loop that starts at 100 and decrements a variable by 1. 
// If the number is even, add the number to the beginning of an array, 
// else add it to the end of the array.

let evenOdds = ["middle"];
for (let i = 100; i >= 0; i--){
	console.log("i modulus", i % 3);
	if (i % 2 === 0){
		evenOdds.unshift(i);
	}else{
		evenOdds.push(i);
	}
}

console.log("evenOdds", evenOdds);

























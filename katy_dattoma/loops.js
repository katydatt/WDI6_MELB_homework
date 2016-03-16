console.log('Best IceCream EVER');

 
var favIceCream = ["strawberries","vanilla","choc chip","rocher"];

console.log('My #1 choice is ' + favIceCream[0]);
console.log('My #2 choice is ' + favIceCream[1]);
console.log('My #3 choice is ' + favIceCream[2]);
console.log('My #4 choice is ' + favIceCream[3]);

//Write a for loop that will iterate from 0 to 20. 
//For each iteration, it will check if the current number 
//is even or odd,
// and report that to the screen (e.g. "2 is even").

var currentNumber = 44;

for(var i = 0; i < 20 ;i++){

if(currentNumber % 2 === 0){
	console.log("It's even!");
}
else{
	console.log("It's odd");
}

}

/*Write a for loop that will iterate from 0 to 10. 
For each iteration of the for loop, it will multiply 
the number by 9 and log the result (e.g. "2 * 9 = 18").
Bonus: Use a nested for loop to show the tables for every 
multiplier from 1 to 10 (100 results total).*/

for(i = 0; i <= 10; i++) {
	
	var multiplier = 9;

	var result = i * multiplier;

	console.log(result);

	for(multiplier = 0; multiplier <= 10; multiplier++) {
		var result2 = multiplier * result;
		console.log(result2);
	}

}


/*On the menu tonight: Steak, fruit salad, 
tofurkey, pork chops.

Directions to students:

prompts the user for their menu choice and assign 
it to a variable.

If a vegan can eat it, return "This cuisine is 
vegan friendly."
Otherwise, return "Vegans beware!"
For the sake of this exercise. 
Hint: Two identical strings are considered to be equal 
to each other.*/



var userChoice = prompt("What is gonna be your choice?");



if (userChoice === 'tofurkey') {
	console.log('This cuisine is vegan friendly');
 }

 else if (userChoice === 'fruit salad' ) {
 	console.log('This cuisine is vegan friendly');
 }
 else {
 	console.log('Vegan Beware!');
 }

// else {
// 	console.log('Vegans beware!');
// }










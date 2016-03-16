//NUMBER 1

var favouriteColors = ['red', 'blue', 'green'];

for (var i = 0; i < favouriteColors.length; i++ )
	console.log("My #1 choice is " + favouriteColors[i]);


//Number 2

for (var i = 0; i <= 20; i++) 
	if (i % 2 === 0) {
		console.log(i + " is an even number");
	} 

//Number 3

for (var i = 0; i <= 10; i++)
	console.log(i * 9);


//Number 4

var studentChoice = prompt("What do you want to eat?");

if (studentChoice === "Steak" || studentChoice === "pork chops") {
	console.log("Vegans beware!");
}
else 
{
	console.log("This cuisine is vegan friendly.");
}

	On the menu tonight: Steak, fruit salad, tofurkey, pork chops.

Directions to students:

prompts the user for their menu choice and assign it to a variable.

If a vegan can eat it, return "This cuisine is vegan friendly."
Otherwise, return "Vegans beware!"
For the sake of this exercise. Tofurkey is definitely vegan friendly.
Hint: Two identical strings are considered to be equal to each other.



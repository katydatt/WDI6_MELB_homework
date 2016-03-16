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



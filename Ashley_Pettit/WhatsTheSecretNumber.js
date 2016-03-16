function guess_the_number(secretNumber) {

    while (secretNumber != user_choice) {
        var user_choice = prompt("What is the secret number");
        if (user_choice == secretNumber) {
            break;
        }
        else {
            alert("You fail at life!");
        }
    }
}

//guess_the_number(42);

function set_the_number(){
	return prompt("Set the secret number as what?");
}

var number = set_the_number;
alert(number);

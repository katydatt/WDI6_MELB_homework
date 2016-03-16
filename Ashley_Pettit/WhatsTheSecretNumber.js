function guess_the_number(secretNumber) {

    while (secretNumber != user_choice) {
        var user_choice = prompt("What is the secretNumber");
        if (user_choice == secretNumber) {
            break;
        }
        else {
            alert("You fail at life!");
        }
    }
}

guess_the_number(42);

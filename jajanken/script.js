let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = 10 * Math.random(); //Randomly generate a number                        

//Conditional logic goes here to determine the computers selection
if (computerSelection <= 4) {
    computerSelection === "rock"
}
else if (computerSelection > 4 && computerSelection <= 7) {
    computerSelection === "paper"
}
else if (computerSelection > 7 && computerSelection <= 10) {
    computerSelection === "scissors"
}

//<--Code goes here-->

//Function to compare the userSelection and the computerSelection to determine the winner
let compare = function (selection1, selection2) {

}
console.log(compare(userSelection, computerSelection)); //call the function to compare and display result
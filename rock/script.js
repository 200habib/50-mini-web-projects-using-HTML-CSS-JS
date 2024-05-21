let playerScoreElement = document.getElementById('playerScore');
let computerScoreElement = document.getElementById('computerScore');

let choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
    console.log("Player choice is: " + playerChoice);
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    console.log("Computer choice is: " + computerChoice);

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("Player wins!");
        playerScoreElement.textContent = parseInt(playerScoreElement.textContent) + 1;
    } else {
        console.log("Computer wins!");
        computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;
    }
}

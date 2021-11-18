let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(computerSelection, playerSelection) {
  computerSelection = computerPlay();
  playerSelection = prompt("Please insert your choice: ").toLowerCase();

  if (
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissor")
  ) {
    const captalizedChoice =
      computerSelection[0].toUpperCase() + computerSelection.slice(1);
    console.log(`Computer wins! ${captalizedChoice} beats ${playerSelection}.`);
  }
}

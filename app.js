let playerScore = 0;
let computerScore = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  const result =
    playerScore > computerScore
      ? `Player wins with ${playerScore} points!`
      : `Computer wins with ${computerScore} points!`;

  console.log(result);

  playerScore = 0;
  computerScore = 0;
}

function computerPlay() {
  const computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(computerSelection, playerSelection) {
  computerSelection = computerPlay();
  playerSelection = prompt("Please insert your choice: ").toLowerCase();

  if (playerSelection === computerSelection) {
    console.log("That's a draw!");
  } else if (
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    computerScore++;
    const captalizedChoice =
      computerSelection[0].toUpperCase() + computerSelection.slice(1);
    console.log(`Computer wins! ${captalizedChoice} beats ${playerSelection}.`);
  } else if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    playerScore++;
    const captalizedChoice =
      playerSelection[0].toUpperCase() + playerSelection.slice(1);
    console.log(`Player wins! ${captalizedChoice} beats ${computerSelection}.`);
  } else {
    alert(`It seems like there's an error!`);
  }
  return;
}

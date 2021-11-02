const playerSelection = "Rock";

// function that returns random output from an array
function computerPlay() {
  let plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)]
}

const computerSelection = computerPlay()

//function that compares playerSelection and computerSelection to choose a winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
    console.log('paper beat rock')
    return ('paper beats rock')
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
    console.log('its a tie, try again!')
    return ('its a tie, try again!')
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
    console.log('rock beats scissors')
    return ('rock beats scissors')
  } else {
    console.log('wut')
  }
}


// function that plays a five round game of rock, paper, scissors
function game() {
  playRound(playerSelection, computerPlay());
  playRound(playerSelection, computerPlay());
  playRound(playerSelection, computerPlay());
  playRound(playerSelection, computerPlay());
};

// console.log(playRound(playerSelection, computerSelection));

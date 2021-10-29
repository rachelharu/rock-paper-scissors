const playerSelection = "Rock";



function computerPlay() {
  let plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)]
}




const computerSelection = computerPlay()

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



function game() {
  playRound(playerSelection, computerPlay());
  playRound(playerSelection, computerPlay());
  playRound(playerSelection, computerPlay());
  playRound(playerSelection, computerPlay());
};

// console.log(playRound(playerSelection, computerSelection));

let playerScore = 0
let computerScore = 0

//defines button and uses the button click to start game/round
let button = document.getElementById("start")
button.onclick = game;



// function that returns random output from an array
function computerPlay() {
  let plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)]
}

const computerSelection = computerPlay()

//function that compares playerSelection and computerSelection to choose a winner

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
//     console.log('paper beat rock')
//     return ('you lose!')
//   } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
//     console.log('its a tie, try again!')
//     return ('its a tie, try again!')
//   } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
//     console.log('rock beats scissors')
//     return ('you win!')
//   } else {
//     console.log('wut')
//   }
// }

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors':
    case playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock':
    case playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper':
      return 'win'
      alert("win!")
    case playerSelection.toLowerCase() === computerSelection:
      return `It's a tie!`
      alert("It's a tie!")
    default:
      return 'lose'
      alert("lose!")
  }
}


// function that plays a five round game of rock, paper, scissors
function game() {
  const playerSelection = prompt();
  const result = playRound(playerSelection, computerPlay())
  console.log(result)
  updateScore(result)
  if (playerScore >= 5 || computerScore >= 5) {
    alert('game over you ' + result)
  }
}



function updateScore(result) {
  if (result === 'win') playerScore++
  else if (result === 'lose') computerScore++
}

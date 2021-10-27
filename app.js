
function computerPlay() {
    const plays = ["rock", "paper", "scissors"];
    return plays[Math.floor(Math.random()*plays.length)];
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('paper beat rock')
    }
     else if (playerSelection === 'rock' && computerSelection === 'rock'){
         console.log('its a tie, try again!')
    }
     else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('rock beats scissors')
    }
    else {
        console.log('wut')
    }
};


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

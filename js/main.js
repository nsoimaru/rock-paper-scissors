/****************************
 Odin Rock Paper Scissors Game
 *****************************/

// Declare global variable

const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;
let round = 0;
let roundWinner;

computerChoice = () => {
    rand = Math.floor(Math.random() * choices.length);
    let computer = choices[rand];
    return computer;
}

// Initiate the game
playGame = (e) => { 
    // Play five rounds
    player = e.target.id

    if (player === computerChoice()) {
        console.log('tie')
    } else {
        console.log('it`s working!!!')
    }
}

buttons.forEach(button => {
    button.addEventListener('click', playGame);
})



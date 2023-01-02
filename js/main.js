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
playGame = () => {
    buttons.forEach(button => {
        button.addEventListener('click', playRound);
    })    
}

playRound = (e) => { 
    // Play five rounds
    player = e.target.id;
    // player = player.toString();
    if(round < 5) {
        checkWinner();
    } else {        
        if (player === 'rock' || player === 'paper' || player === scissors) {
            playerChoiceButton = buttons.forEach(button => {
            button.classList.add('disabled'); 
                            
            let playAgainButton = document.getElementById('playAgainButton');    
            playAgainButton.classList.remove('hidden');
            playAgainButton.classList.remove('disabled');

            let quitButton = document.getElementById('quit');
            quitButton.classList.remove('hidden');                
            quitButton.classList.remove('disabled');
            })
        } else {
            if (player === 'playAgainButton') {
                playAnotherRound();
            } else {
                quitGame();
            }
        }
    }
    // return player;
}

checkWinner = () => {
    let winner = '';
    let computer = computerChoice();

    if (player == computer) {
        winner = 'Tie game!';
    }
    else if (player == 'rock' && computer == 'paper') {
        winner = 'Computer win!';
        computerScore++;
    }
    else if (player == 'paper' && computer == 'scissors') {
        winner = 'Computer win!';
        computerScore++;
    }
    else if (player == 'scissors' && computer == 'rock') {
        winner = 'Computer win!';
        computerScore++;
    } else {
        winner = 'Player win!';
        playerScore++;
    }
    round++;

    // const resultDiv = document.querySelector('.result');

    const playerSelection = document.querySelector('.result .result-show .player-selection');
    playerSelection.classList.add('result');
    playerSelection.innerText = `${player}`;

    const computerSelection = document.querySelector('.result .result-show .computer-selection');
    computerSelection.classList.add('result');
    computerSelection.innerText = `${computerChoice()}`;
    
    const winnerShow = document.querySelector('.result .result-show .winner-show');
    winnerShow.classList.add('result');
    winnerShow.innerText = `${winner}`; 
    
    const playerResult = document.querySelector('.result .result-show .player-score');
    playerResult.classList.add('result');
    playerResult.innerText = `${playerScore}`;

    const computerResult = document.querySelector('.result .result-show .computer-score');
    computerResult.classList.add('result');
    computerResult.innerText = `${computerScore}`;

    const showRound = document.querySelector('.result .result-show .round-show');
    showRound.classList.add('result');
    showRound.innerText = `${round}`;
}

playAnotherRound = () => {
    console.log('Play another round');
    window.location.reload();
}

quitGame = () => {
    container = document.getElementsByClassName('container')
    console.log(container);
    container[0].innerText = 'By!!!';

}
playGame();
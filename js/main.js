/****************************
Odin Rock Paper Scissors Game
*****************************/

// Declare global variable

const choices = ['rock', 'paper', 'scissors'];
let round = 0;
let playerScore = 0;
let computerScore = 0;
let winner = "";

// Initiate the game

game = () => {
    // Ask user if they want to play
    const answer = confirm('Do you want to play \nRock Paper Scissor game?')
    console.log(confirm)
    if (answer) {
        playGame()
    } else {
        alert('Ok. Maybe next time.')
    } 
}

exit = () => {
    alert('BY!!!!')
    round = 5;
    return;
}

playGame = () => { 
    // Play five rounds
    playRound();
}

playRound = () => {
    while (round < 5) {
        round++;
        playerChoice();
        computerChoice();
        checkWinner();
        alert(` Round: ${round}
                Player chose: ${player}
                Computer chose:${computer}
                ${winner}
                Player score: ${playerScore}
                Computer score: ${computerScore}`);
    } 
    // Ask if he wants to play another round    
    playAgain(); 
}

playerChoice = () => {
    player = prompt('Please insert rock paper or scissors')    
    if (player) {
        player = player.trim().toLowerCase();
        if (player === 'rock' || player === 'paper' || player === 'scissors') {
            return player;
        } else {
            alert('You not enter rock paper or scissors');
            playerChoice();
        }            
    } else {
        exit();
    }  
}

computerChoice = () => {
    rand = Math.floor(Math.random() * choices.length);
    computer = choices[rand];
    return computer;
}

checkWinner = () => {
    if (playerChoice() === computerChoice()) {
        winner = "I`ts a tie game.";
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        winner = 'You win.';
        playerScore++;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        winner = 'You win.';
        playerScore++;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        winner = 'You win.';
        playerScore++;
    } else {
        winner = 'Computer win';
        computerScore++;
    }
}

playAgain = () => {
    const rerun = confirm(`Do you want to play another round?`)
    if (rerun) {
        round = 0;
        playRound();
    } else {
        alert(`Thank's for your time!
            See you next time`);
    }
}



game()
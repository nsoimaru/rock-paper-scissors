/****************************
Odin Rock Paper Scissors Game
*****************************/

// Declare global variable

const choices = ['rock', 'paper', 'scissors'];
let round = 0;

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

playGame = () => {    
    alert('Welcome')

    // Play five rounds
    playRound();
}

playRound = () => {
    do {
        round++
        alert(`Round: ${round}`)
    } while (round < 5); 
}

game()
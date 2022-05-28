
const options = document.querySelectorAll('li');
const result = document.querySelector('.result');
const winner = document.querySelector('.winner');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const subHeader = document.querySelector("h2");
const restartBtn = document.querySelector('.restart');
const optionDisplay = document.querySelector('.option-container');



let playerScore = 0;
let computerScore = 0;
let playerPlay;



restartBtn.style.display = 'none'; 

//forEach method to iterate through each list
options.forEach((option) => {
    // add a click listener to each list and play game
option.addEventListener('click', () => {
        playerPlay = option.dataset.selection;
        playRound(playerPlay,computerPlay());
        reportWinner(); 
    });
});





function computerPlay() {
    let randomDecision;
    let options = ["scissors","paper","rock"]; 
    return randomDecision = options[Math.floor(Math.random() * options.length)];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
if ( (playerSelection ==="rock" && computerSelection ==="scissors") ||
    (playerSelection ==="scissors" && computerSelection ==="paper") ||
    (playerSelection ==="paper" && computerSelection ==="rock")){
    ++playerScore;
    winner.textContent = `You won the round! ${playerSelection} beats ${computerSelection}`;
    pScore.textContent = playerScore;
}

else if ((playerSelection ==="scissors" && computerSelection ==="rock") ||
        (playerSelection ==="paper" && computerSelection ==="scissors") ||
        (playerSelection ==="rock" && computerSelection ==="paper"))  {
        ++computerScore;
        winner.textContent = `You lost the round! ${computerSelection} beats ${playerSelection}`;
        cScore.textContent = computerScore;       
}

else {
    //else if playerSelection === computerSelection  
    winner.textContent = "It's a tie!";
    }
}  


function reportWinner() {

    if(playerScore === 5) {
        result.textContent = "Final result";
        winner.textContent = "Congrats! You won the game.";
        subHeader.style.display = 'none';
        optionDisplay.remove();
        restartBtn.style.display = 'inherit';
        restartBtn.addEventListener('click',() => location.reload());
    }
    else if (computerScore === 5) {
        result.textContent = "Final result";
        winner.textContent = "Oh no! Computer won the game.";
        subHeader.style.display = 'none';
        optionDisplay.remove();
        restartBtn.style.display = 'inherit';
        restartBtn.addEventListener('click',() => location.reload());
    }   
    
}




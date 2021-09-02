
let playerScore = 0;
let computerScore = 0;
const playerPlay = prompt("What's your pick");
const computerSelection = computerPlay();
console.log(playRound(playerPlay,computerPlay()));
game();
reportWinner();



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
         console.log("you won the round!");
    }
    else if ((playerSelection ==="scissors" && computerSelection ==="rock") ||
            (playerSelection ==="paper" && computerSelection ==="scissors") ||
            (playerSelection ==="rock" && computerSelection ==="paper"))  {
            ++computerScore;
            console.log("you lost the round");
    }
   
    else if (playerSelection === computerSelection ) { 
        console.log("it's a draw");
    }

    else if(playerSelection === null || playerSelection === undefined || " "){
            ++computerScore;
            console.log("you lost the round" );
    }
}  


function game () {
    for( let i = 1; i < 5; i++) {
        const playerPlay = prompt("What's your pick");
        const computerSelection = computerPlay();
        console.log(playRound(playerPlay,computerPlay()));
    }
}



function reportWinner() {

    if(playerScore > computerScore) {
        console.log('You are the winner! Scores is' + " " + playerScore + ":" + computerScore);
    }
    else if (playerScore === computerScore) {
        console.log('No winner! Scores is' + " " + computerScore + ":" + playerScore );
    }
    else{
    console.log('Computer is the winner! Scores is' + " " + computerScore + ":" + playerScore);
    }
}

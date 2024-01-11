
let randomWord = Math.floor(Math.random() * 3);
let i = 0;
const computerSelection = getComputerChoice(randomWord);
let playerSelection = prompt("Rock, Paper, Scissors?");
console.log(playerSelection);
console.log(computerSelection); 



function getComputerChoice(randomWord){
    if(randomWord === 0) {
        return 'Rock';
    } else if(randomWord === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

/*function game(i)*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        console.log(playerSelection.toUpperCase());
        result = "Tie!! Replay the round.";
    }
      else {
            switch(playerSelection.toUpperCase()){
                case 'ROCK':
                    result = (computerSelection === 'Scissors') ? "You win! Rock beats Scissors." : "You Lose! Paper beats Rock!";
                    break;
                case 'PAPER': 
                    result = (computerSelection === 'Rock') ? "You win! Paper beats Rock." : "You Lose! Scissors beats Paper.";
                    break;
                case 'SCISSORS': 
                    result = (computerSelection === 'Paper') ? "You win! Scissors beats Paper." : "You Lose! Rock beats Scissors.";
                    break;
            }
        }
        i++;
        return result;
      }

       
      console.log(playRound(playerSelection, computerSelection));

    /*
    else if(playerSelection.toUpperCase() = computerSelection.toUpperCase()){
        return "You Won! Rock beats Scissors.";
    }else (computerSelection === 'Paper')
        return "You Lose! Paper beats Rock.";*/






/*Tie!  equsl 
You Won Rock Beats Scissors! rock is greater than paper
You Won Scissor beats paper! Scissors is greater than paper
You Won Paper beats Rocks! Paper is greateer than paper

You Lose "" 
You lose ""
you lose ""*/

/* 
1 = Rock
2 = Sissors 
3 = Paper */
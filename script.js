let i = 0;



function game() {
   while (i <= 4) {

    let randomWord = Math.floor(Math.random() * 3);
    let computerSelection = getComputerChoice(randomWord);
    let playerSelection = prompt("Rock, Paper, Scissors?");
  
    function getComputerChoice(randomWord){
        if(randomWord === 0) {
            return 'Rock';
        } else if(randomWord === 1) {
            return 'Paper';
        } else {
            return 'Scissors';
        }
    } 

    console.log(playerSelection);
    console.log(computerSelection); 

    
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
            result = "Tie!! Replay the round.";
        }
          else {
                switch(playerSelection.toUpperCase()){
                    case 'ROCK':
                        result = (computerSelection === 'Scissors') ? "You win!" : "You Lose!";
                        i++;
                        break;
                    case 'PAPER': 
                        result = (computerSelection === 'Rock') ? "You win!" : "You Lose!";
                        i++;
                        break;
                    case 'SCISSORS': 
                        result = (computerSelection === 'Paper') ? "You win!" : "You Lose!";
                        i++;
                        break;
                }
            }
            return result;
          }
          console.log(playRound(playerSelection, computerSelection));
        
    }

}





/*let randomWord = Math.floor(Math.random() * 3);
let computerSelection = getComputerChoice(randomWord);
let playerSelection = prompt("Rock, Paper, Scissors?");
function getComputerChoice(randomWord){
    if(randomWord === 0) {
        return 'Rock';
    } else if(randomWord === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
game()
if result win player plus 1 if lose computer plus 1 
greater result returns winner

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
        return result;
      }

       
      console.log(playRound(playerSelection, computerSelection));

    else if(playerSelection.toUpperCase() = computerSelection.toUpperCase()){
        return "You Won! Rock beats Scissors.";
    }else (computerSelection === 'Paper')
        return "You Lose! Paper beats Rock.";


Tie!  equsl 
You Won Rock Beats Scissors! rock is greater than paper
You Won Scissor beats paper! Scissors is greater than paper
You Won Paper beats Rocks! Paper is greateer than paper

You Lose "" 
You lose ""
you lose ""

1 = Rock
2 = Sissors 
3 = Paper 
*/
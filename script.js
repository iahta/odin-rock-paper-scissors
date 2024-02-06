
    let computerScore = 0;
    let playerScore = 0;
    let roundsPlayed = 0; 
    const container = document.querySelector('div');
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    const playerChoice = document.getElementById('player-pick');
    const gameScorePlayer = document.getElementById('player-score');
    const gameScoreComputer = document.getElementById('computer-score');
  
        rockButton.addEventListener('click', () => playRound('rock'));
        paperButton.addEventListener('click', () => playRound('paper'));
        scissorsButton.addEventListener('click', () => playRound('scissors'));

    
    function playRound(playerSelection) {
        let randomWord = Math.floor(Math.random() * 3);
        let computerSelection = getComputerChoice(randomWord);  

        function getComputerChoice(randomWord){
            if(randomWord === 0) {
                return 'rock';
            } else if(randomWord === 1) {
                return 'paper';
            } else {
                return 'scissors';
            }
        }; 
        console.log(playerScore);
        console.log(computerScore);
        console.log(playerSelection);
        console.log(computerSelection); 
        
        const computerChoice = document.getElementById('computer-pick');
        const roundResult = document.getElementById('round-result');
        playerChoice.textContent = "Player Pick: " + playerSelection.toUpperCase();
        computerChoice.textContent = "Computer Pick: " + computerSelection.toUpperCase();
       
        if (playerSelection === computerSelection){
            roundResult.textContent = "Tie!! Replay the round.";
        } else {
                switch(playerSelection){
                    case 'rock':
                        roundResult.textContent = (computerSelection === 'scissors') ? "You win!" : "You Lose!";
                        break;
                    case 'paper': 
                        roundResult.textContent = (computerSelection === 'rock') ? "You win!" : "You Lose!";
                        break;
                    case 'scissors': 
                        roundResult.textContent = (computerSelection === 'paper') ? "You win!" : "You Lose!";
                        break;
                }
            } 
          //add the score updates to the round results, add rounds to played 
          //to play round function.  
            function processResult(roundResult) {
                while (roundsPlayed < 4) {
                    if (roundResult = "You Win!"){; 
                    playerScore++;
                    roundsPlayed++;
                    break;
                }else if (roundResult = "You Lose!") {
                    computerScore++;
                    roundsPlayed++; 
                    break;
                }
                }
                gameScorePlayer.textContent = playerScore;
                gameScoreComputer.textContent = computerScore;
            }
        };

        

         
        






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
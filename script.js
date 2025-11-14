 
        function getComputerChoice(){
            let num = Math.floor(Math.random()*3) + 1;
            let choice;

            if (num == 1){
                choice = "rock";
            } else if (num == 2){
                choice = "paper"
            }
            else {
                choice = "scissors";
            }
            return choice;
        }

        function getHumanChoice(){
            let choice = prompt("Choose rock, paper or scissors");
            return choice.toLowerCase();
        }
        
        function playGame() {
            let humanScore = 0;
            let computerScore = 0;

            function playRound(humanChoice, computerChoice){
                if (humanChoice === computerChoice){
                    return "It's a draw";
                } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "scissors"){
                    computerScore++;
                    return `You lose! ${computerChoice} beats ${humanChoice}`;
                } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
                    humanScore++;
                    return `You win! ${humanChoice} beats ${computerChoice}`;
                }
            }

            for(let i = 0; i < 5; ++i){
                let humanChoice = getHumanChoice();
                let computerChoice = getComputerChoice();
                console.log(playRound(humanChoice, computerChoice));
            }
            if (humanScore === computerScore){
                return `It's a draw! You scored ${humanScore} and the computer scored ${computerScore} `
            } else if (humanScore > computerScore){
                return `You win! You scored ${humanScore} and the computer scored ${computerScore}`; 
            } else {
                return `You lose! You scored ${humanScore} and the computer scored ${computerScore}`
            }
        }
    
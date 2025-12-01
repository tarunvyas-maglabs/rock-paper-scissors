let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const buttons = document.querySelectorAll("button");
const info = document.querySelector(".info");
const humanScoreValue = document.querySelector("#human-score");
const computerScoreValue = document.getElementById("computer-score");
const restartButton = document.createElement("button");
restartButton.textContent = "Play Again";
restartButton.classList.add("restart-button");

function initGame(){
    buttons.forEach((button)=> {
        button.addEventListener("click", onChoiceButtonClick);
    });

    restartButton.addEventListener("click", resetGame);

    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    updateScoreUI();
    showMessage("Make your move!");
}

initGame();

function onChoiceButtonClick(event) {
    if(gameOver){
        return;
    }

    const humanChoice = event.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();

    handlePlayerChoice(humanChoice, computerChoice);
}


function handlePlayerChoice(humanChoice, computerChoice){
    playRound(humanChoice, computerChoice);
    updateScoreUI();
    checkWinner();
}

function checkWinner(){
    if(humanScore>= 5 || computerScore >= 5){
        gameOver = true;

        if (humanScore > computerScore) {
            showMessage(
                `You reached 5 points. You win the game! 🎉`
            );
        } else {
            showMessage(
                `The computer reached 5 points. You lose the game. 😔`
            );
        }
        if (!restartButton.parentNode){
            info.appendChild(restartButton);
        }
    }
}

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

function playRound(humanChoice, computerChoice){   
    if (humanChoice === computerChoice){
        showMessage(info.textContent = `Draw! You both chose ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        showMessage(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        showMessage(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    updateScoreUI();
}

function updateScoreUI(){
    humanScoreValue.textContent = humanScore;
    computerScoreValue.textContent = computerScore;
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    gameOver = false;

    updateScoreUI();
    showMessage("New game! Make your move.");
    restartButton.remove();    
}

function showMessage(text){
    info.textContent = text;
}





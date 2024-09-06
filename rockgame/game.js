let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText = "Game was draw. play again!";
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = "you win!";
        userScore++;
    } else {
        console.log("You lost.");
        msg.innerText = "you lost!";
        compScore++;
    }
    console.log(`Score - You: ${userScore}, Computer: ${compScore}`);
};


const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper";
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});

let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock", "paper" , "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (usrWin, userChoice, compChoice) => {
    if(usrWin) {
        userScore++;
        msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    } else {
        compScore++;
        msg.innerText = `You Lost. ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("User choice = " , userChoice)
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let usrWin = true;
        if(userChoice ==="rock"){
            usrWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            usrWin = compChoice === "scissors" ? false : true;
        } else if(userChoice === "scissors"){
            usrWin = compChoice === "rock" ? false : true;
        }
        showWinner(usrWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
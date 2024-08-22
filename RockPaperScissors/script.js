let userScore= 0;
let compUser= 0;
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const Userscore2= document.querySelector("#user-score");
const Compscore2= document.querySelector("#comp-score");

const genCompChoice= ()=>{
    const options=["rock", "paper", "scissors"];
    let random =Math.floor(Math.random()*3);
    return options[random];
}

const drawGame=()=>{
    msg.innerText= "Game is Draw !... Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        Userscore2.innerText= userScore;
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compUser++;
        Compscore2.innerText=compUser;
        msg.innerText = `You loose ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
    const compChoice =genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice=== "rock"){
            userWin= compChoice==="paper" ? false : true;
        } else if (userChoice=== "paper"){
            userWin= compChoice==="scissors" ? false : true;
        }else{
            userWin= compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})
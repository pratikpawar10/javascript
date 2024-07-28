let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");





const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw.Play again";
    msg.Style.backgroundColor = "#081b31";
  
};


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        
        console.log("you win!");
        msg.innerText = "you win!";
       msg.Style.backgroundColor = "green";

    } else {
        console.log("you lose");
        msg.innerText = "you lose!"; 
        msg.Style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
    

    if(userChoice === compChoice) {
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userwin = compChoice ==="paper"? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false:true;

        } else{
            userWin = compChoice === "rock" ? false : true;
        }
            showWinner(userWin);
        }
    };


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice);
    });
});


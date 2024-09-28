let user_score=0;
let comp_score=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");

const showWinner=(userWin,user_choice,comp_choice)=>{
    if (userWin){
        console.log("UserWin")
        msg.innerText=`You win ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor="green"
        user_score+=1;
        user.innerText=user_score;
    }else{
        console.log("ComputerWin")
        msg.innerText=`You lost ${comp_choice} beats ${user_choice}`;
        msg.style.backgroundColor="red"
        comp_score+=1;
        comp.innerText=comp_score;
    }
}

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game is draw"
    msg.style.backgroundColor="blue"
}

const genCompChoice=()=>{
    let option=["rock","paper","scissor"]
    a=Math.floor(Math.random()*3);
    return option[a];
}
const playGame=(user_choice)=>{
    comp_choice=genCompChoice();
    // console.log(user_choice);
    // console.log(comp_choice);
    if (user_choice===comp_choice){
        drawGame();
    }
    else{
        userWin=true;
        if (user_choice=="rock"){
            userWin= comp_choice=="paper"?false:true;
    }else if(user_choice=="paper"){
        userWin= comp_choice=="scissor"?false:true;

    }else{
        userWin=comp_choice=="rock"?false:true;
    }
    showWinner(userWin,comp_choice,user_choice);
}
}
choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute("id");
        playGame(user_choice);
    });
});


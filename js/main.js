
wantToPlay=confirm("Are you ready to play rock, paper or scissors game");
console.log(wantToPlay)
let result;

computer=Math.floor(Math.random()*3)+1;
console.log(computer);
computerChoose=computer===1?"rock"
:computer===2?"paper":"scissors";

if(wantToPlay){
    playerChoose=prompt("Please enter rock, paper or scissors");
    console.log(typeof (playerChoose)+"---->")


    let playerOne=playerChoose.trim().toLowerCase();
   

    
    if(playerOne==="rock" || playerOne==="paper" || playerOne==="scissors")
    {
        if(playerOne){
            result=playerOne===computerChoose?`Player choice : ${playerOne} \n Computer Choice : ${computerChoose} \n Tie`
            : playerOne==="rock" && computerChoose==="paper" ? `Player choice : ${playerOne} \n Computer Choice : ${computerChoose} \n Computer wins `
            : playerOne==="paper" && computerChoose==="scissors" ? `Player choice : ${playerOne} \n Computer Choice : ${computerChoose} \n Computer wins `
            : playerOne==="scissors" && computerChoose==="rock" ? `Player choice : ${playerOne} \n Computer Choice : ${computerChoose} \n Computer wins ` : `Player choice : ${playerOne} \n Computer Choice : ${computerChoose} Player wins`
            alert(result)

            again=confirm("Do you want to play again")

            again ? location.reload():
                alert("Nice to play with you ,Lets play after sometimes")
            
    }else{
        alert("You didn't enter rock, paper or scissors")
    }
    }else{
        alert("I thought you want to play with me")
    }
   
}else{
    alert("Ok, May be next time");
}


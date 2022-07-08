 function  computerPlay() {
    let i = Math.floor((Math.random()*3));
    let nome = "Rock"; 
    switch(i){
        case 0:
            nome = "Rock";
            break;
        case 1:
            nome = "Paper";
            break;
        case 2:
            nome = "Scissors";
            break;
    }
    return nome; 
 }


 /* funzione con winner come stringa

function playRound (playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase() ;
    let winner = "Patta!";
    switch(playerSelection){
        case computerSelection:
            break;
        case "rock":
            if(computerSelection == "scissors"){
                winner = "You win! Rock beat Scissors";
            } else{
                winner = "You lose! Paper beat Rock";
            }
            break;
        case "paper":
            if(computerSelection == "scissors"){
                winner = "You lose! Scissors beat Paper";
            } else{
                winner = "You win! Paper beat Rock";
            }
            break;
        case "scissors":
            if(computerSelection == "rock"){
                winner = "You lose! Rock beat Scissors";
            } else{
                winner = "You win! Scissors beat Paper";
            }
            break;
        case playerSelection != rock , scissors, paper: 
            winner = "You must insert one value between the three proposed";
    }
    return winner; 
}
*/

/*UN SOLO ROUND

let playerSelection = prompt("Insert a value between: Rock, Paper, Scissors");
let computerSelection = computerPlay();
console.log("The computer play is " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
*/

/*funzione con winner come booleano*/

function playRound (playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase() ;
    let winner = undefined;
    /*while ((playerSelection !== "rock") || (playerSelection !== "scissors") || (playerSelection !== "paper")){ 
           playerSelection = (prompt("You must insert one value between the three proposed")).toLowerCase();      
    }*/ 
        switch(playerSelection){
            case computerSelection:
                break;
            case "rock":
                if(computerSelection == "scissors"){
                    winner = true;
                } else{
                    winner = false;
                }
                break;
            case "paper":
                if(computerSelection == "scissors"){
                    winner = false;
                } else{
                    winner = true;
                }
                break;
            case "scissors":
                if(computerSelection == "rock"){
                    winner = false;
                } else{
                    winner = true;
                }
                break;
        }   
        
    return winner; 
}



function game (numeroRound) {
    let roundVinti = "The winner of the rounds are: "; 
    let win = undefined;
    for (let i=0; i<numeroRound; i++){
        let playerSelection = prompt("Insert a value between: Rock, Paper, Scissors");
        let computerSelection = computerPlay();
        console.log("The computer play at round " + i + " is " + computerSelection);
        console.log("Your play a round " + i + " is " + playerSelection);
        win = playRound(playerSelection, computerSelection);
        switch (win){
            case true:
                console.log("You win the round " + i );
                roundVinti = roundVinti + " YOU ";
                break;
            case false:
                console.log("You lose the round " + i);
                roundVinti = roundVinti +" COMPUTER ";
                break;
            case undefined:
                console.log("Nobody win the round " + i);
                roundVinti = roundVinti + " PATTA ";
                break;
        } 
    }
    return roundVinti; 
}

console.log(game(5));


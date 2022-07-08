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
    /*while ((playerSelection !== "rock") && (playerSelection !== "scissors") && (playerSelection !== "paper")){ 
           playerSelection = (prompt("You must insert one value between the three proposed")).toLowerCase();      
    } */ 

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
    let win = undefined;
    let roundVinti = [];
    let conteggio = [0,0];  /*posizone zero = You, pos 1 = Comp */
    for (let i=0; i<numeroRound; i++){
        let playerSelection = prompt("Insert a value between: Rock, Paper, Scissors");
        while ((playerSelection !== "rock") && (playerSelection !== "scissors") && (playerSelection !== "paper")){ 
                playerSelection = (prompt("You must insert one value between the three proposed")).toLowerCase();      
        }  
        let computerSelection = computerPlay();
        console.log("The computer play at round " + i + " is " + computerSelection);
        console.log("Your play a round " + i + " is " + playerSelection);
        win = playRound(playerSelection, computerSelection);
        switch (win){
            case true:
                console.log("You win the round " + i );
                roundVinti[i]="Y";
                conteggio[0] = conteggio[0] +1 ;  
                break;
            case false:
                console.log("You lose the round " + i);
                roundVinti[i]="C";
                conteggio[1] = conteggio[1] +1 ; 
                break;
            case undefined:
                console.log("Nobody win the round " + i);
                roundVinti[i]="N";
                break;
        } 
    }

    return [roundVinti , conteggio]; 
}

let n = prompt("Inserisci il numero di round");
let ris = game(n);
/*console.log(ris);*/
let tabellone = "The results are: ";

for (i=0; i<n; i++){
    tabellone = tabellone + " - " + ris[0][i]; 
}

if (ris[1][0]>ris[1][1]){
    tabellone = tabellone + " \n Hai vinto con un risultato di " + (ris[1][0]).toString() + " a " + (ris[1][1]).toString() ;
} else if (ris[1][0]<ris[1][1] ) {
    tabellone = tabellone + " \n Hai perso con un risultato di " + (ris[1][0]).toString() + " a " + (ris[1][1]).toString() ;   
} else {
    tabellone = tabellone + "\n Patta con un risultato di " + (ris[1][0]).toString() + "pari";  
}

console.log(tabellone);


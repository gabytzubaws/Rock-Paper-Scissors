var r = document.getElementById('rock');
var p = document.getElementById('paper');
var s = document.getElementById('scissors');
var pscore = document.getElementById('playerscore');
var cscore = document.getElementById('computerscore');
var cRound = document.createElement("P");
var cStatus = document.createElement("P");
var computerscore = 0;
var playerscore = 0;
main();

function getComputerChoice(){
    const choice=['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random()*3)];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    cStatus.innerText = userChoice + " vs " + computerChoice;
    document.body.appendChild(cStatus);
    switch(userChoice){
        case 'rock':
        {
            if(computerChoice == 'paper') cRound.innerText = "Computer wins";
                else if(computerChoice == 'scissors') cRound.innerText = "Player wins";
                    else cRound.innerText = "Draw."
            document.body.appendChild(cRound);
            break;
        }
        case 'paper':
        {
            if(computerChoice == 'scissors') cRound.innerText = "Computer wins";
                else if(computerChoice == 'rock') cRound.innerText = "Player wins";
                    else cRound.innerText = "Draw."
            document.body.appendChild(cRound);
            break;
        }
        case 'scissors':
        {
            if(computerChoice == 'rock') cRound.innerText = "Computer wins";
                else if(computerChoice == 'paper') cRound.innerText = "Player wins";
                    else cRound.innerText = "Draw."
            document.body.appendChild(cRound);
            break;
        }
    }
    var result = cRound.innerHTML;
    if(result === 'Computer wins') computerscore ++;
        else if(result === 'Player wins') playerscore ++;
    pscore.innerHTML = playerscore;
    cscore.innerHTML = computerscore;

}


function main(){
    var playerScore = 0;
    var computerScore = 0;
    r.addEventListener(
        "click",function(){
            game('rock')
        }
    );
    p.addEventListener(
        "click",function(){
            game('paper')
        }
    );
    s.addEventListener(
        "click",function(){
            game('scissors')
        }
    );
}


function computerPlay()
{
    var choice = Math.floor((Math.random() * 3 ) + 1);
    switch(choice)
    {
    case 1:
        choice = 'Rock';
        break;
    case 2:
        choice = 'Paper';
        break;
    case 3:
        choice = 'Scissors';
        break;
    }
    return choice;
}

function playerPlay(choice)
{
    switch(choice)
    {
    case 1:
        choice = 'Rock';
        break;
    case 2:
        choice = 'Paper';
        break;
    case 3:
        choice = 'Scissors';
        break;
    }
    return choice;
}

function playRound(playerSelection, ComputerSelection)
{
    var result ='';
    switch(playerSelection)
    {
        case 'Paper':
            if(ComputerSelection === 'Rock') result = "You win!";
                else if(ComputerSelection === 'Scissors') result ="You lose!";
                    else result = 'It is a Draw!';
            break;
        case 'Rock':
            if(ComputerSelection === 'Scissors') result ="You win!";
                else if(ComputerSelection === 'Paper') result = "You lose!";
                    else result ="It is a draw!";
            break;
        case 'Scissors':
            if(ComputerSelection === 'Paper') result ="You win!";
                else if(ComputerSelection === 'Rock') result ="You lose!";
                    else result = "It is a draw!";
    }
    return result;
}

function game(){
    var playerScore = 0, computerScore = 0;
    for(let i = 1; i <=5; i ++)
    {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let ComputerSelection = computerPlay();
        let result = playRound(playerSelection, ComputerSelection);
        switch(result)
        {
            case 'You win!':
                playerScore ++;
                break;
            case 'You lose!':
                computerScore ++;
                break;
            case 'It is a draw!':
                playerScore ++;
                computerScore++;
            break;
        }
        console.log(playerScore, '  ',  computerScore);
        console.log('\n');
    }
    console.log('\n');
    if(computerScore > playerScore) console.log('You lost');
        else if (playerScore < computerScore) console.log('You won');
            else console.log('It is a draw');
}

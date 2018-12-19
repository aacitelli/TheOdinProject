/* 

    Key:

    0 = Rock
    1 = Paper
    2 = Scissors 

*/

/* Global variables b/c otherwise these would just get declared again and again */
var wins = 0, losses = 0;



function rock()
{
    playGame(0, genComputerChoice());
}

function paper()
{
    playGame(1, genComputerChoice());
}

function scissors()
{
    playGame(2, genComputerChoice());
}

function playGame(userChoice, computerChoice)
{
    // Used to output whatever the result was, basic DOM manipulation 
    let generalOutput = document.getElementById("gameOutput");
    let winsOutput = document.getElementById("wins");
    let lossesOutput = document.getElementById("losses");

    /* Winning Situations */
    // Rock, Scissors
    if (userChoice === 0 && computerChoice === 2)
    {
        generalOutput.innerHTML = "You chose rock, AI chose scissors. You win!";
        wins++;
    }

    // Paper, Rock
    else if (userChoice === 1 && computerChoice === 0)
    {
        generalOutput.innerHTML = "You chose paper, AI chose scissors. You win!";
        wins++;
    }

    else if (userChoice === 2 && computerChoice === 1)
    {
        generalOutput.innerHTML = "You chose scissors, AI chose paper. You win!";
        wins++;
    }

    // Scissors, Paper

    /* Tying Situations */
    // Rock, Rock
    else if (userChoice === 0 && computerChoice === 0)
    {
        generalOutput.innerHTML = "You both chose rock. Please play again.";
    }

    // Paper, Paper
    else if (userChoice === 1 && computerChoice === 1)
    {
        generalOutput.innerHTML = "You both chose paper. Please play again.";
    }

    // Scissors, Scissors
    else if (userChoice === 2 && computerChoice === 2)
    {
        generalOutput.innerHTMl = "You both chose scissors. Please play again.";
    }

    /* Losing Situations */
    // Scissors, Rock
    else if (userChoice === 2 && computerChoice === 0)
    {
        generalOutput.innerHTML = "You chose scissors, AI chose rock. You lose.";
        losses++;
    }

    // Rock, Paper
    else if (userChoice === 0 && computerChoice === 1)
    {
        generalOutput.innerHTML = "You chose rock, AI chose paper. You lose.";
        losses++;
    }

    // Paper, Scissors
    else if (userChoice === 1 && computerChoice === 2)
    {
        generalOutput.innerHTML = "You chose paper, AI chose scissors. You lose.";
        losses++;
    }

    // Debug
    else
    {
        generalOutput.innerHTML = "Program screwed up somewhere.";
    }

    // These don't technically need incremented every time but it's easier to organize it this way for me 
    winsOutput.innerHTML = wins;
    lossesOutput.innerHTML = losses;
}

function genComputerChoice()
{    
    // Returns either 0, 1, or 2
    return (Math.floor(Math.random() * 3));
}
const buttons = document.querySelector('.buttons')
const selectedWeapon = document.querySelectorAll("button.weapon")
const resetButton = document.createElement('button')
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')
let weaponText = document.querySelector('.weaponP')
let roundResult = document.querySelector('.roundResultP')
let currentScore = document.querySelector('.currentScoreP')

let playerChoice = ''
let compScore = 0;
let playerScore = 0;

selectedWeapon.forEach((button) => { 
    button.addEventListener('click', () => { 
        playerChoice = button.id
        initialise()
        return
    })
})

function initialise(){
    if (compScore + playerScore == 5){
        return
    }
    else {
        game(playerChoice)
    }
}

function game(playerChoice){
    const computerChoice = getComputerChoice()
    weaponText.textContent = `You Selected ${playerChoice}. Computer Selected ${computerChoice}`

        //function playRound(playerChoice, computerChoice){
            if (playerChoice == computerChoice){
                roundResult.textContent = "It's a Draw"
                currentScore.textContent = `Computer: ${compScore} - You: ${playerScore}`
                return
            }
            else if (playerChoice == 'Rock' && computerChoice == 'Paper'
                    || playerChoice == 'Paper' && computerChoice == 'Scissors'
                    || playerChoice == 'Scissors' && computerChoice == 'Rock'){
                        compScore ++;
                        if (compScore + playerScore == 5){
                            gameOver()
                            
                        }
                        else{
                        roundResult.textContent = `You lose this round! ${ computerChoice } beats ${playerChoice}`
                        currentScore.textContent = `Computer: ${compScore} - You: ${playerScore}`
                        
                        }
                    }
            else {
                playerScore ++;
                if (compScore + playerScore == 5){
                    gameOver()
                    
                }
                else {
                roundResult.textContent = `You won this round! ${ playerChoice } beats ${computerChoice}`
                currentScore.textContent = `Computer: ${compScore} - You: ${playerScore}`
                return
                }
            }
        }

    //}
    
    
function getComputerChoice() {
    let convert =''
    let randomNumber = (Math.floor(Math.random()*3)+1)
    randomNumber === 1 ? convert = 'Rock' : randomNumber === 2 ? convert = 'Paper' : convert = 'Scissors'
    return convert
}

function gameOver() {

    while (buttons.firstChild){
        buttons.removeChild(buttons.firstChild)
    }
    //const resetButton = document.createElement('button')
    resetButton.textContent = 'New Game'
    resetButton.addEventListener('click', () => {
        newGame()
    })

    buttons.appendChild(resetButton)
    currentScore.textContent = `Computer: ${compScore} - You: ${playerScore}`
    weaponText.textContent = ''
    roundResult.textContent = "Game Over. Press new game to play again"
    return
}


function newGame() {
buttons.removeChild(resetButton)
buttons.appendChild(rock)
buttons.appendChild(paper)
buttons.appendChild(scissors)
playerChoice = ''
compScore = 0;
playerScore = 0;
weaponText.textContent = "Choose Your Weapon"
roundResult.textContent = ''
currentScore.textContent =''
}


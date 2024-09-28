let random_num= Math.round(Math.random()*100+1)
console.log(random_num);

let userInput=document.querySelector("#guessInput")
let subButton=document.querySelector("#submitGuess")
let attemptField=document.querySelector(".attempts-left")
let previousGuesses=document.querySelector(".guesses")
let feedback=document.querySelector("#feedback")
const resetButton=document.querySelector('#resetGame')
let errorField=document.querySelector("#errorMessage")


resetButton.style.display='none' //initially play again button is hidden

let guesses=[]
let countGuess=0

let playGame=true

if(playGame){
    subButton.addEventListener("click",function(e){
        e.preventDefault()
        const guessNum=parseInt(userInput.value)
        userInput.value=""
        userInput.focus()
        validate(guessNum)

    })
}

function validate(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        errorField.innerHTML="Enter Valid Number"
    }
    else{
        errorField.innerHTML=""
        guesses.push(guess)
        checkguess(guess)
        updateGuesss(guess)
    }
}

function checkguess(guess){
    if(guess==random_num){
        dispalyMsg(`You guessed it right! Number is ${random_num}`)
        endgame()
    }
    else if(guess<random_num){
        dispalyMsg(`Try to guess bigger number`)
    }
    else if(guess>random_num){
        dispalyMsg(`Try to guess smaller number`)
    }

}

function updateGuesss(guess){
    previousGuesses.textContent +=`${guess}  `
    countGuess++
    attemptField.innerHTML=`${10-countGuess}`
    if(countGuess==10){
        dispalyMsg(`You loss! Number Was ${random_num}`)
        endgame()
    }
}
function dispalyMsg(guess){
    feedback.innerHTML=`${guess}`
}

function endgame(){
    playGame=false
    userInput.setAttribute("disabled","")
    subButton.setAttribute("disabled","")
    resetButton.style.display=''
    resetButton.addEventListener("click",function(e){
        e.preventDefault()
        feedback.innerHTML=""
        newGame()

    })
}

function newGame(){
    guesses=[]
    countGuess=0
    playGame=true
    random_num= Math.round(Math.random()*100+1)
    console.log(random_num);
    userInput.removeAttribute("disabled")
    subButton.removeAttribute("disabled")
    resetButton.style.display='none'
    previousGuesses.textContent=""
    attemptField.innerHTML="10"
}
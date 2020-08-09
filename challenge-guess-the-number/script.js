let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 5;
let count=0;

//SELECTOR
let guessBtn=document.querySelector(".btnGuess");
let resetMsg = document.getElementsByClassName("final-output");
let guessLeftParagraph = document.getElementById('guessLeft');
let newGameBtn=document.querySelector(".btnNewGame");



//EVENT LISTENER
guessBtn.onclick=()=>{
  let numGuessed = document.querySelector(".inputs-Values").value;
  if(!numGuessed == "" && numGuessed >0 && numGuessed < 100){
    count++;
    tries--;
    if(tries == 0){
      guessLeftParagraph.textContent = `You lose, the number was ${randomNumber}!`;
      setTimeout(newGame, 2000);
      tries = 5;
  
    }else{
      guessLeftParagraph.textContent = `You have ${tries} tries left!`;
      document.getElementById("try").textContent="tries:"+count;
    }
   
    }else {
      document.getElementById("try").textContent="enter valid number!";
  }
  
}

function guessNumber() {

  let guess = document.querySelector(".inputs-Values").value;
  let msg=document.getElementsByClassName("final-output");
  if(guess==="" || guess<=0 || guess>100){
    msg[0].innerHTML="Please enter a number between 1 and 100 ";
  }else if(guess>randomNumber){
    msg[0].innerHTML="Number is too high";
  }else if(guess<randomNumber){
      msg[0].innerHTML="Number is too low";
    }else {
      msg[0].innerHTML="Guess is correct. You win!";
    }
  
}

//EVENT LISTENER
newGameBtn.addEventListener("click",newGame);

function newGame() {

  document.querySelector(".inputs-Values").value=""; //RESETS THE INPUT BOX TO BLANK
  randomNumber = Math.floor(Math.random() * 100 + 1); //RESET THE RANDOM NUMBER
  count = 0;
  document.getElementById("try").textContent="tries:"+count;
  resetMsg[0].innerHTML="Please enter a number between 1 and 100";
  guessLeftParagraph.textContent = `You have 5 tries`;
  console.log(randomNumber);
}

newGame();
//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
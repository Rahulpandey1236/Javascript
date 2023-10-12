const randomno=parseInt(Math.random() *100 +1);

const submit=document.querySelector('#subt')
const useriput=document.querySelector('.guessfield')
const guesslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastresult')
const loworhi=document.querySelector('.loworhi')
const startover=document.querySelector('.resulparas')

let p=document.createElement('p')

let previousguess=[]
let numofguess=1
let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){

        e.preventDefault()
        const guess=parseInt(useriput.value)
        validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert("pls enter a valid no")
    }else if(guess < 1){
        alert("pls enter a valid no")
    }else if(guess > 100){
        alert("pls enter a no less than 100")
    }else{
        previousguess.push();
        if(numofguess===11){
            displayguess(guess)
            displaymessage(`game over random no was ${randomno}`)
            endgame()
        }else{
            displayguess(guess)
            chekguess(guess)
            }
    }


}
function chekguess(guess){
if(guess===randomno){
    displaymessage(`you guess it right`)
    endgame();
}else if(guess<randomno){
    displaymessage(`the no is too low`);
}else if(guess>randomno){
    displaymessage(`the no is too high`)
}
}

function displayguess(guess){
useriput.value='';
guesslot.innerHTML+=`${guess} `;
numofguess++;
remaining.innerHTML=`${11-numofguess}`;

}
function displaymessage(message){
loworhi.innerHTML=`<h2>${message} </h2>`;
}



function endgame() {
    useriput.value = '';
    useriput.setAttribute('disabled', ' ');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
  }
  
  function newgame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomno = parseInt(Math.random() * 100 + 1);
      previousguess = [];
      numofguess = 1;
      guesslot.innerHTML = '';
      remaining.innerHTML = `${11 - numofguess} `;
      useriput.removeAttribute('disabled');
      startover.removeChild(p);
  
      playgame = true;
    });
  }
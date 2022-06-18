//Selectors
const computerChoiceElm=document.querySelector('#computer-choice')
const yourChoiceElm=document.querySelector('#your-choice')
const resultElm=document.querySelector('#result')
const resetbtnElm=document.querySelector('#Reset')
const possibleChoices=document.querySelectorAll('.button')
let yourChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(evt)=>{
yourChoice=evt.target.id;
yourChoiceElm.textContent=yourChoice;
genComputerChoice();
getResult();
}))
 function genComputerChoice(){
  const randomNumber=Math.floor(Math.random()*possibleChoices.length)+1;
    if(randomNumber===1){computerChoice='Rock'}
    if(randomNumber===2){computerChoice='Paper'}
    if(randomNumber===3){computerChoice='Scissors'}
    computerChoiceElm.textContent=computerChoice;
}

function getResult(){
    if(computerChoice===yourChoice){result="It's a Tie"}
    if(computerChoice==='Rock' && yourChoice==='Paper'){result="You win"} 
    if(computerChoice==='Rock' && yourChoice==='Scissors'){result="You lose"}
    if(computerChoice==='Paper' && yourChoice==='Scissors'){result="You win"}
    if(computerChoice==='Paper' && yourChoice==='Rock'){result="You lose"}
    if(computerChoice==='Scissors' && yourChoice==='Rock'){result="You win"}
    if(computerChoice==='Scissors' && computerChoice==='Paper'){result="You lose"} 
    resultElm.textContent=result;
}

function resetValues(){
    computerChoice='';
    yourChoice='';
    result='';
    resultElm.textContent=result;
    computerChoiceElm.textContent=computerChoice;
    yourChoiceElm.textContent=yourChoice;
}
resetbtnElm.addEventListener('click',resetValues);



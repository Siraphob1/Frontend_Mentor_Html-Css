const partnormal = document.getElementById("part-normal");
const partthankyou = document.getElementById("part-thankyou");
const select = document.getElementById("selected");
let valuescore;

const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const score4 = document.getElementById("score4");
const score5 = document.getElementById("score5");

const arrayscore = [score1,score2,score3,score4,score5]

function SelectScore(value){
    valuescore = value

    switch(value){
     case 1: score1.classList.add("score-select"); 
     ResetClass(value);
     break;
     case 2: score2.classList.add("score-select"); 
     ResetClass(value);
     break;
     case 3: score3.classList.add("score-select"); 
     ResetClass(value);
     break;  
     case 4: score4.classList.add("score-select");   
     ResetClass(value);
     break;
     case 5: score5.classList.add("score-select");  
     ResetClass(value);
     break; 
    }
}

function BtnSubmit(){
    partnormal.classList.add("display-none");
    partthankyou.classList.remove("display-none");
    select.innerText = `You selected ${valuescore} out of 5`
}

function ResetClass(index){
     for(let i =0; i<arrayscore.length; i++ ){
       if(i+1 != index ){
              arrayscore[i].classList.remove("score-select"); 
       }
     }
}

const partnormal = document.getElementById("part-normal");
const partthankyou = document.getElementById("part-thankyou");
const select = document.getElementById("selected");
let valuescore;

const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const score4 = document.getElementById("score4");
const score5 = document.getElementById("score5");

function SelectScore(value){
    valuescore = value

    switch(value){
     case 1: score1.classList.add("score-select"); 
            score2.classList.remove("score-select"); 
            score3.classList.remove("score-select"); 
            score4.classList.remove("score-select"); 
            score5.classList.remove("score-select"); 
    break;
     case 2: score2.classList.add("score-select"); 
            score1.classList.remove("score-select"); 
            score3.classList.remove("score-select"); 
            score4.classList.remove("score-select"); 
            score5.classList.remove("score-select"); 
     break;
     case 3: score3.classList.add("score-select"); 
            score1.classList.remove("score-select"); 
            score2.classList.remove("score-select"); 
            score4.classList.remove("score-select"); 
            score5.classList.remove("score-select"); 
     break;  
     case 4: score4.classList.add("score-select");   
            score1.classList.remove("score-select"); 
            score2.classList.remove("score-select"); 
            score3.classList.remove("score-select"); 
            score5.classList.remove("score-select"); 
     break;
     case 5: score5.classList.add("score-select");  
            score1.classList.remove("score-select"); 
            score2.classList.remove("score-select"); 
            score3.classList.remove("score-select"); 
            score4.classList.remove("score-select"); 
     break; 
    }
}

function BtnSubmit(){
    partnormal.classList.add("display-none");
    partthankyou.classList.remove("display-none");
    select.innerText = `You selected ${valuescore} out of 5`
}


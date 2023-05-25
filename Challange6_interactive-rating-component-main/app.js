const partnormal = document.getElementById("part-normal");
const partthankyou = document.getElementById("part-thankyou");
const score = document.getElementById("score1");
const score2 = document.getElementById("score2");

const select = document.getElementById("selected");

function changeText(index){
    partnormal.classList.add("display-none");
    partthankyou.classList.remove("display-none");
    ShowSelect(index);
}

function ShowSelect(index){
    select.innerText = `You selected ${index} out of 5`
}
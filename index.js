var randomNumber = Math.random(); 
randomNumber = Math.floor(randomNumber*6)+1;
if(randomNumber==1){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
}
else if(randomNumber==2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
}
else if(randomNumber==3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
}
else if(randomNumber==4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
}
else if(randomNumber==5){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
}
else{
    document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
}

var randomNumber2 = Math.random(); 
randomNumber2 = Math.floor(randomNumber2*6)+1;
if(randomNumber2==1){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
}
else if(randomNumber2==2){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
}
else if(randomNumber2==3){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
}
else if(randomNumber2==4){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
}
else if(randomNumber2==5){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
}
else{
    document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
}

if(randomNumber==randomNumber2){
    document.getElementById("Result").innerHTML = "Draw!" ;
}
else if(randomNumber>randomNumber2){
    document.getElementById("Result").innerHTML = "Player 1 Wins! 🚩" ;
}
else {
    document.getElementById("Result").innerHTML = "🚩 Player 2 Wins!" ;
}
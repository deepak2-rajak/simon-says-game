let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","yellow","blue","pink"]
document.addEventListener("keypress",function(){
    // console.log("game was started");
    if(started===false){
        console.log("game was satrted");
        started=true;
        levelUp();
    }
    
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    h2.style.Color="crimson";
    let randidx=Math.floor(Math.random()*3);
    let randColor=btns[randidx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randidx);
    // console.log(randColor);
    // console.log(randBtn);
 gameSeq.push(randColor);
 console.log(gameSeq);
 gameFlash(randBtn);
};
function gameFlash(btn){
    
    btn.classList.add("flash");
    setTimeout(function(){
btn.classList.remove("flash");
    },250);
};
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

};
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",buttonpress);
};
function buttonpress(){
    let btn=this;
    userflash(btn);
    
   userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkanswer(userSeq.length-1);
}
function checkanswer(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
            h2.innerHTML=`Game Over! you score was ${level} <br>
            press any to start game again`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
            },150);
            resetgame();
        }
       
    };

function resetgame(){
    level=0;
    started=false;
    userSeq=[];
    gameSeq=[];
}
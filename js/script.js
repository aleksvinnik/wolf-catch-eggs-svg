
let getEl = (className) =>{return document.getElementsByClassName(className)[0]};
let disabled= (el)=>{el.classList.add("disabled")}
let enabled= (el)=>{el.classList.remove("disabled")}
let dKu=(el)=>{el.classList.remove("chicken")}
let eKu=(el)=>{el.classList.add("chicken")}
let gameA= getEl("gameA");
let pause= getEl("pause");
gameA.addEventListener("click",playGame);
pause.addEventListener("click",pauseGame);
keyLeftUp=getEl("keyLeftUp");
keyLeftDown=getEl("keyLeftDown");
keyRightUp=getEl("keyRightUp");
keyRightDown=getEl("keyRightDown");

let sounds={
    leftup:new Audio("./sounds/lu.wav"),
    leftdown:new Audio("./sounds/ld.wav"),
    rightup:new Audio("./sounds/ru.wav"),
    rightdown:new Audio("./sounds/rd.wav"),
    catch:new Audio("./sounds/catch.wav"),
    loss:new Audio("./sounds/loss.wav"),
    end:new Audio("./sounds/gameover.wav"),
}
let rabbit=getEl("rabbit");
let wolf={
    left:getEl("wolf-left"),
    right:getEl("wolf-right"),
}
let damage={
    left:[
        getEl("damage-left-0"),
        getEl("damage-left-1"),
        getEl("damage-left-2"),
        getEl("damage-left-3"),
        getEl("damage-left-4"),
        getEl("damage-left-5")
    ],
    right:[
        getEl("damage-right-0"),
        getEl("damage-right-1"),
        getEl("damage-right-2"),
        getEl("damage-right-3"),
        getEl("damage-right-4"),
        getEl("damage-right-5")
    ]
}
let rings={
    up:getEl("ring-up"),
    down:getEl("ring-down"),
}
let paws={
    up:getEl("paw-up"),
    down:getEl("paw-down"),
}
let cart={
    left:{
        up:getEl("cart-left-up"),
        down:getEl("cart-left-down"),
    },
    right:{
        up:getEl("cart-right-up"),
        down:getEl("cart-right-down"),
    }
}
let chickens=[
    getEl("chicken0"),
    getEl("chicken1"),
    getEl("chicken2"),
    getEl("chicken3"),
]
let score=[
    getEl("score1"),
    getEl("score2"),
    getEl("score3")
]
let eggs={
    left:{
       up:[
        getEl("egg-left-up-0"),
        getEl("egg-left-up-1"),
        getEl("egg-left-up-2"),
        getEl("egg-left-up-3"),
        getEl("egg-left-up-4"),
       ],
       down:[
        getEl("egg-left-down-0"),
        getEl("egg-left-down-1"),
        getEl("egg-left-down-2"),
        getEl("egg-left-down-3"),
        getEl("egg-left-down-4"),
       ]
    },
    right:{
        up:[
            getEl("egg-right-up-0"),
            getEl("egg-right-up-1"),
            getEl("egg-right-up-2"),
            getEl("egg-right-up-3"),
            getEl("egg-right-up-4"),
           ],
           down:[
            getEl("egg-right-down-0"),
            getEl("egg-right-down-1"),
            getEl("egg-right-down-2"),
            getEl("egg-right-down-3"),
            getEl("egg-right-down-4"),
           ]
    }
}


rabbit.classList.add("disabled");
disabled(wolf.left);
disabled(wolf.right);
function hideDamage(){
    for(let i=0; i<6;i++){
        disabled(damage.left[i]);
        disabled(damage.right[i]);
    }
}

disabled(cart.left.up);
disabled(cart.left.down);
disabled(cart.right.up);
disabled(cart.right.down);
disabled(rings.up);
disabled(rings.down);
disabled(paws.up);
disabled(paws.down);
for(let i=0; i<3;i++){
    disabled(score[i])
}
for(let i=0; i<5;i++){
    disabled(eggs.left.up[i])
    disabled(eggs.left.down[i])
    disabled(eggs.right.up[i])
    disabled(eggs.right.down[i])
}

function disableWolf(){
    disabled(wolf.left);
    disabled(wolf.right);
    disabled(cart.left.up);
    disabled(cart.left.down);
    disabled(cart.right.up);
    disabled(cart.right.down);
}
keyLeftUp.addEventListener('click', (e)=>{
    e.preventDefault();
    disableWolf();
     enabled(cart.left.up);
    enabled(wolf.left);
    positionCart=0;
});
keyLeftDown.addEventListener('click', (e)=>{
    e.preventDefault();
    disableWolf();
    enabled(cart.left.down);
    enabled(wolf.left);
    positionCart=1;
});
keyRightUp.addEventListener('click', (e)=>{
    e.preventDefault();
    disableWolf();
    enabled(cart.right.up);
    enabled(wolf.right);
    positionCart=2;
});
keyRightDown.addEventListener('click', (e)=>{
   e.preventDefault();
    disableWolf();
    enabled(cart.right.down);
    enabled(wolf.right);
    positionCart=3;
});
document.addEventListener('keydown', setWolf);
function setWolf(event){
    if(event.code!="KeyA"&&event.code!="KeyZ"&&event.code!="KeyK"&&event.code!="KeyM") return;
    disableWolf();
   if(event.code=="KeyA"||event.code=="KeyZ"){
    enabled(wolf.left);
   }
   if(event.code=="KeyK"||event.code=="KeyM"){
    enabled(wolf.right);
   }
   if(event.code=="KeyA"){
    enabled(cart.left.up);
    positionCart=0;
   }
   if(event.code=="KeyZ"){
    enabled(cart.left.down);
    positionCart=1;
   }
   if(event.code=="KeyK"){
    enabled(cart.right.up);
    positionCart=2;
   }
   if(event.code=="KeyM"){
    enabled(cart.right.down);
    positionCart=3;
   }
}
let d=Array();
d["0"]=["a","b","c","e","f","g"];
d["1"]=["c","f"];
d["2"]=["b","c","d","e","g"];
d["3"]=["b","c","d","f","g"];
d["4"]=["a","c","d","f"];
d["5"]=["b","a","d","f","g"];
d["6"]=["b","a","d","e","f","g"];
d["7"]=["b","c","f"];
d["8"]=["a","b","c","d","e","f","g"];
d["9"]=["a","b","c","d","f","g"];
function hideScore(){
    for(let i=0; i<4;i++){
        for(let j=0; j<7;j++){
            led=document.getElementsByClassName(d["8"][j]+i)[0];
            led.classList.add("disabled");
        }
    }
}
hideScore();
hideDamage();
let scorecounter=0;
let positionCart=0;
var maxEggs=1;
var liveEggs=0;
var health=6;
var oldEgg=0;
var counter=0;
let currentEggs=0;
let Ticks=0;
let randEgg=0;
let loses=0;
let damageCounter=0;
let showDamageLeft=false;
let showDamageRight=false;
let leveltime=250;
let rabbitVisible=false;
let rabbitCounter=0;
let currentleveltime=250;
let timer;
let gameStarted=false;
let pauseStatus=false;
enabled(cart.left.up);
 enabled(wolf.left);
var eggsArray=[0b00000000,0b00000000,0b00000000,0b00000000];
function init(){
scorecounter=0;
positionCart=0;
maxEggs=1;
liveEggs=0;
health=6;
oldEgg=0;
counter=0;
currentEggs=0;
Ticks=0;
randEgg=0;
loses=0;
damageCounter=0;
showDamageLeft=false;
showDamageRight=false;
leveltime=250;
rabbitVisible=false;
rabbitCounter=0;
currentleveltime=250;
pauseStatus=false;
eggsArray=[0b00000000,0b00000000,0b00000000,0b00000000];
}
function showHealth(){
    if(health<=0){
        enabled(score[2]);
        enabled(score[1]);
        enabled(score[0]);
        return gameOver()
    }
    if(health==1){
        score[2].classList.toggle("disabled");
        enabled(score[1]);
        enabled(score[0]);
    }
    if(health==2){
        disabled(score[2]);
        enabled(score[1]);
        enabled(score[0]);
    }
    if(health==3){
        disabled(score[2]);
        score[1].classList.toggle("disabled");
        enabled(score[0]);
    }
    if(health==4){
        disabled(score[2]);
        disabled(score[1]);
        enabled(score[0]);
    }
    if(health==5){
        disabled(score[2]);
        disabled(score[1]);
        score[0].classList.toggle("disabled");
    }
}
function gameOver(){
    gameStarted=false;
    clearInterval(timer);
    sounds.end.play();
}
function displayScore(){
    hideScore();
    scoreString=scorecounter.toString().split("").reverse();
    for(let i=0;  i<scoreString.length; i++){
        d[scoreString[i]].forEach(cled => {
            led=document.getElementsByClassName(cled+i)[0];
            led.classList.remove("disabled");
        });
    }
}
function addEgg(currentEggs){
    eggsArray[currentEggs]|=0b00000001;
}
function showChickens(currentEggs){
    for(let i=0; i<4;i++){
        dKu(chickens[i]);
    }
    eKu(chickens[currentEggs]);
}
function showEgs(){
    let checkBit=0b00000001;
    for(let i=0; i<5; i++){
      if (eggsArray[0]&checkBit) enabled(eggs.left.up[i])
       else disabled(eggs.left.up[i])
     if  (eggsArray[1]&checkBit) enabled(eggs.left.down[i])
      else disabled(eggs.left.down[i])
      if  (eggsArray[2]&checkBit) enabled(eggs.right.up[i])
       else disabled(eggs.right.up[i])
      if (eggsArray[3]&checkBit) enabled(eggs.right.down[i])
       else disabled(eggs.right.down[i])
       checkBit<<=1
    }
}

function playGame(){
    if(gameStarted==false){
        gameStarted=true;
        init();
        timer=setInterval(processEggs,leveltime)
    }
    
}
function pauseGame(){
    if(gameStarted==true&&pauseStatus==false){
        clearInterval(timer);
        pauseStatus=true;
        return;
    }
    
     if(gameStarted==true&&pauseStatus==true){
        timer=setInterval(processEggs,leveltime)
        pauseStatus=false;
        return;
     }
     
}
function moveEggs(currentEggs){
    eggsArray[currentEggs]<<=1;
    if(eggsArray[currentEggs]&0b00100000){
        liveEggs--;
        if(currentEggs==positionCart){
            scorecounter++;
            currentleveltime=leveltime-Math.floor(scorecounter/10);
            sounds.catch.play();
            if(scorecounter==100){
              clearInterval(timer);
              timer=setInterval(processEggs,currentleveltime);
            }
            if(scorecounter==200){
                clearInterval(timer);
                timer=setInterval(processEggs,currentleveltime);
            }
            if(scorecounter==300){
                clearInterval(timer);
                timer=setInterval(processEggs,currentleveltime);
            }
            if(scorecounter==400){
                clearInterval(timer);
                timer=setInterval(processEggs,currentleveltime);
            }
            if(scorecounter==500){
                clearInterval(timer);
                timer=setInterval(processEggs,currentleveltime);
            }
            if(scorecounter==600){
                clearInterval(timer);
                timer=setInterval(processEggs,currentleveltime);
            }
            if(scorecounter==700){
                clearInterval(timer);
                timer=setInterval(processEggs,currentleveltime);
            }
            if(scorecounter==800){
                clearInterval(timer);
                timer=setInterval(processEggs,currentleveltime);
            }
            if(scorecounter==900){
                clearInterval(timer);
                timer=setInterval(processEggs,currentleveltime);
            }

        }
        else{
            if(rabbitVisible) {
           
            health--;}
            else
            {
                health--;  
                health--;
            }
            
            if(currentEggs<2) showDamageLeft=true;
            else  showDamageRight=true;
            return;
        }
    }
    
   
    eggsArray[currentEggs]&=0b00011111;
    
        if (liveEggs<maxEggs&&currentEggs==0){
            liveEggs++;
            randEgg  = Math.floor(Math.random() * (3 - 0 + 1)) ;
            if(randEgg==oldEgg) randEgg++;
            if(randEgg>3) randEgg=randEgg-2;
            oldEgg=randEgg;
            addEgg(randEgg);
           
            Ticks=0;
        }
        if(eggsArray[currentEggs]>0){
            if(currentEggs==0) setTimeout(()=>sounds.leftup.play(),1);
            if(currentEggs==1)  setTimeout(()=>sounds.leftdown.play(),1);
             if(currentEggs==2)  setTimeout(()=>sounds.rightup.play(),1);
             if(currentEggs==3) setTimeout(()=>sounds.rightdown.play(),1);
        }
}
function toggleRabbit(){
    if(rabbitCounter>=100){
        rabbitCounter=0;
        rabbitVisible=!rabbitVisible;
        if(rabbitVisible) {
            enabled(rabbit);
            enabled(paws.up);
        }
        if(!rabbitVisible){
            disabled(rabbit);
            disabled(paws.up);
        }
    }
    rabbitCounter++;
} 
function processDamage(){
    hideDamage();
    if(damageCounter>=6){
        showDamageRight=false;
        showDamageLeft=false;
        eggsArray=[0b00000000,0b00000000,0b00000000,0b00000000];
        currentEggs=0;
        damageCounter=0;
        liveEggs=0;
        return;
    }
    if(showDamageRight){
        currentdamage=damage.right;
    }
    if(showDamageLeft){
        currentdamage=damage.left;
    }
    enabled(currentdamage[damageCounter]);
    damageCounter++;
    sounds.loss.play();
}

function processEggs(){
    if(health==0) gameOver();
    toggleRabbit();
    let sc=Math.trunc(scorecounter/100)*100;
    let newsc=scorecounter-sc;
    if (newsc<5) maxEggs=1;
    else if (newsc<10) maxEggs=2;
    else if (newsc<40) maxEggs=3;
    else if (newsc<70) maxEggs=4;
    else maxEggs=5;
    if(showDamageRight||showDamageLeft) return processDamage();
    if(currentEggs>3){
        currentEggs=0;
        Ticks++;
    }
    moveEggs(currentEggs);
    showEgs();
    displayScore();
    showHealth();
    currentEggs++;
}
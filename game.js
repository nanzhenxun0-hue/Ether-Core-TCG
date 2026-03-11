let currentScreen="home"

let playerHand=[]
let playerDeck=[...CARDS]
let playerLane=[null,null,null]

let enemyHP=20

function showScreen(id){

document.querySelectorAll(".screen")
.forEach(s=>s.classList.remove("active"))

document.getElementById(id).classList.add("active")

}

function drawCard(){

let card=playerDeck[Math.floor(Math.random()*playerDeck.length)]

playerHand.push(card)

renderHand()

}

function renderHand(){

let hand=document.getElementById("hand")

hand.innerHTML=""

playerHand.forEach((card,i)=>{

let div=createCard(card)

div.onclick=()=>playCard(i)

hand.appendChild(div)

})

}

function createCard(card){

let div=document.createElement("div")

div.className="card "+card.type

div.innerHTML=`

<div class="card-name">${card.name}</div>

<div>${card.effect}</div>

<div class="card-stats">

<span>ATK ${card.atk}</span>

<span>HP ${card.hp}</span>

</div>

`

return div

}

function playCard(index){

let card=playerHand[index]

for(let i=0;i<3;i++){

if(playerLane[i]==null){

playerLane[i]=card

document.getElementById("player-lane"+(i+1))
.appendChild(createCard(card))

break

}

}

playerHand.splice(index,1)

renderHand()

}

function endTurn(){

attackPhase()

drawCard()

}

function attackPhase(){

for(let i=0;i<3;i++){

let card=playerLane[i]

if(card){

enemyHP-=card.atk

}

}

document.getElementById("enemy-core").innerText=
"Enemy Core HP:"+enemyHP

if(enemyHP<=0){

alert("Victory!")

}

}

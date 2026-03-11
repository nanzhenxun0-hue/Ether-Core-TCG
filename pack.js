function openPack(){

let result=document.getElementById("pack-result")

result.innerHTML=""

for(let i=0;i<5;i++){

let card=CARDS[Math.floor(Math.random()*CARDS.length)]

let div=createCard(card)

result.appendChild(div)

}

}


function selectCard(card) {
    card.classList.toggle('flipped')
}

// Retorna um número recebido via prompt
function askCardNumber(){
    return parseInt(prompt('Com quantas cartas você deseja jogar?'))
}


let evenNumber = false
function verifyNumber(number) {
    if (number >=2 && number <=14){
        if (number % 2 === 0){
            evenNumber = true
            return true
        }
    }
}

function addCards(numberOfCards) {
    let cards = document.querySelector('.cards')
    for (let i=0; i<numberOfCards; i++){
        let card = `            
        <div class="card" onclick="selectCard(this)" >
        <div class="face back-face">
            <img src="images/bobrossparrot.gif" alt="">
        </div>
        <div class="face front-face">
            <img src="images/front.png" alt="">
        </div>
    </div>`
        cards.innerHTML += card
    }
    
}

let askedNumber = 0
window.onload = function () {
    while (evenNumber === false){
        askedNumber = askCardNumber()
        if (verifyNumber(askedNumber)){
            //adicionar cartas 
            addCards(askedNumber)
        }
   }
}
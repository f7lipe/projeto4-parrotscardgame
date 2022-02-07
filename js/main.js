let askedNumber = 0
function askCardNumber() {
    return parseInt(prompt('Com quantas cartas você deseja jogar?'))
}

let evenNumber = false
function verifyNumber(number) {
    if (number >= 2 && number <= 14) {
        if (number % 2 === 0) {
            evenNumber = true
            return true
        }
    }
}

let time = 0
let clock = null
function countTime(){
 time++
 document.querySelector('.time-span').innerHTML = time
}

function stopCountingTime(){
    clearInterval(clock)
}

let createdCards = []
function createCards(numberOfCards) {
    for (let i = 0; i < numberOfCards / 2; i++) {

        const card = `            
        <div class="card" id="C${i}" data-identifier="card" onclick="selectCard(this)" >
        <div class="face back-face" data-identifier="back-face">
            <img src="images/${i}.gif" alt="">
        </div>
        <div class="face front-face" ata-identifier="front-face">
            <img src="images/front.png" alt="">
        </div>
        </div>`
        const twinCard = `            
        <div class="card" id="C${i}" data-identifier="card" onclick="selectCard(this)" >
        <div class="face back-face" data-identifier="back-face">
            <img src="images/${i}.gif" alt="">
        </div>
        <div class="face front-face" ata-identifier="front-face">
            <img src="images/front.png" alt="">
        </div>
        </div>`
        createdCards.push(card, twinCard)

    }
    createdCards.sort(comparador)
}

function addCards(cards) {
    let cardsDiv = document.querySelector('.cards')
    for (let i = 0; i < cards.length; i++) {
        cardsDiv.innerHTML += cards[i]
    }
}

let lockSelection = false
let selectedCards = {card1: {id: null, div: null}, card2:  {id: null, div: null} }
function selectCard(card) {
    // Vira a carta 
    if (lockSelection === false) {
        card.classList.add('flipped')
        
        if (selectedCards.card1.id === null) {
            selectedCards.card1.id = card.id
            selectedCards.card1.div = card
        } else {
            selectedCards.card2.id = card.id
            selectedCards.card2.div = card
            lockSelection = true
            setTimeout(compareCards, 1000)
        }
    } 
    //console.log('primeira:' + selectedCards.card1.id, ' - segunda:' + selectedCards.card2.id)
}

function flipCard(card) {
    card.classList.toggle('flipped')
}

let flippedCards = 0    
function compareCards() {
    if (selectedCards.card1.id !== selectedCards.card2.id) {
        //desvira as cartas
        flipCard(selectedCards.card1.div)
        flipCard(selectedCards.card2.div)
    } else {
        flippedCards++
    }

    if (flippedCards === askedNumber/2){
        alert(`Você venceu com ${played} jogadas`)
        stopCountingTime()
    }
    

    incrementPalyed()
    resetCards()
    lockSelection = false
}

let played = 0
function incrementPalyed(){
    played++
    let numberDiv = document.querySelector('.number-span')
    numberDiv.innerHTML = played
}

function resetCards(){
    selectedCards.card1.id = null
    selectedCards.card1.div = null
    selectedCards.card2.id = null
    selectedCards.card2.div = null
}


function comparador() {
    return Math.random() - 0.5
}


window.onload = function () {
    while (evenNumber === false) {
        askedNumber = askCardNumber()
        if (verifyNumber(askedNumber)) {
            //adicionar cartas 
            createCards(askedNumber)
            addCards(createdCards)
            clock = setInterval(countTime, 1000)
        }
    }
}

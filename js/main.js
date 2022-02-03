
function selectCard(card) {
    card.classList.toggle('virado')
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

let askedNumber = 0
window.onload = function () {
    while (evenNumber === false){
        askedNumber = askCardNumber()
        if (verifyNumber(askedNumber)){
            //adicionar cartas 
        }
   }
}
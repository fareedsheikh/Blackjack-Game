let player = {
    name: "Umar Fareed",
    chips: 145
}

let cards = []
let sum = 0

let hasBlackJcak = false
let isAlive = false

let meassage = ""

let meassageEl = document.querySelector("#meassage-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor (Math.random () * 13) + 1
    if( randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1) {
        return 11
    }
    else{
        return randomNumber
    }
}

function statGame () {
    renderGame()
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for( i = 0; i < cards.length; i ++ ) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "sum: " + sum
    if(sum <= 20){
        meassage = "So You Want to Draw a New Card"
    }
    else if (sum === 21){
        meassage = "wooooh you've got Blackjack"
        hasBlackJcak = true
    }
    else{
        meassage = "you're out of game!"
        isAlive = false
    }
    meassageEl.innerText = meassage
}

function newCard() {
    if(isAlive === true && hasBlackJcak === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame(card)
    }
}


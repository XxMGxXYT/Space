// Memory Game

// Game Start
document.querySelector(".Game-Buttons span").onclick = function(){
    // Prompt : Ask for the name of player
    let playerName = prompt("Write Your Name, please")
    // Check if the name empty or not
    if(playerName == null || playerName == ""){
        document.querySelector(".Game-Info .name span").innerHTML = "Guest";
    } else{
        document.querySelector(".Game-Info .name span").innerHTML = playerName;
    }
    // Remove the screen to start the game
    document.querySelector(".Game-Buttons").remove();
    document.getElementById("start").play();
}
// Game Start

let duration = 1000;
// Get every single card
let cardsContainer = document.querySelector(".Game-Container");

let gameCards = Array.from(cardsContainer.children);

let orderRange = [...Array(gameCards.length).keys()]

// Call The Random Numbers Function
RandomNumbers(orderRange)

gameCards.forEach((gameCard , index) =>{
    // Add Order CSS Proporty to the cards
    gameCard.style.order = orderRange[index];
    // Add Click Event to the cards
    gameCard.addEventListener("click" , function(){
        flipCards(gameCard)
    })
})

// Flip cards function
function flipCards(currentCard){
    // Add flip class to the current card
    currentCard.classList.add("flip")
    // Get Only Flipped Cards
    let flippedCards = gameCards.filter(hasFlipClass => hasFlipClass.classList.contains("flip"));
    // Check if the card has 2 cards flipped 
    if(flippedCards.length === 2){
        // Stop Clicking Function
        stopClicking();
        // Check if they matched
        MatchedCards(flippedCards[0] , flippedCards[1]);
    }
}
// Flip cards function

// Stop Clicking Function
function stopClicking(){
    // Add class to stop clicking
    cardsContainer.classList.add("stop-clicking")
    // Set time to complete clicking
    setTimeout(() => {
        cardsContainer.classList.remove("stop-clicking")
    }, duration)
}
// Stop Clicking Function

// Matched Cards Function
function MatchedCards(fisrtCard , secondCard){
    // Get The Wrong Tries span
    let tries = document.querySelector(".tries span")
    // Check If The Both Cards Are Similar
    if(fisrtCard.dataset.planets === secondCard.dataset.planets){
        // Remove flip class
        fisrtCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        // Add matched class
        fisrtCard.classList.add("matched")
        secondCard.classList.add("matched")
        document.getElementById("correct").play();
    } else {
        document.getElementById("wrong").play();
        // Add 1 for wrong tries
        tries.innerHTML = parseInt(tries.innerHTML) + 1;
        // if cards not matched
        setTimeout(() => {
            fisrtCard.classList.remove("flip")
            secondCard.classList.remove("flip")
        }, duration)
    }
}
// Matched Cards Function

// Make a random numbers function
function RandomNumbers(array){
    let current = array.length,
    lastNum,
    random;
    while(current > 0){
        // Getting a random number from the array
        random = Math.floor(Math.random() * current)
        current--;
        // Last number in the array
        lastNum = array[current];
        // Switch last number with random number
        array[current] = array[random];
        // Switch the random number with the last number
        array[random] = lastNum;
    }
    return array;
}
// Make a random numbers function

// Memory Game
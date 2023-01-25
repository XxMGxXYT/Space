// let shuffleChar = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
// let counetrNum = 10;

// let btn = document.querySelector(".press")
// let input = document.querySelector(".input")

// btn.onclick = function(){
//     let empty = "";
//     for(let i = 0; i < counetrNum; i++){
//         empty += shuffleChar[Math.floor(Math.random() * shuffleChar.length)]
//     }
//     input.innerHTML = empty;
// }

// Get our elements
let btn = document.querySelector(".press")
let theSecret = document.querySelector(".theSecret")
let rightImg = document.getElementById("img")
let startScr = document.querySelector(".start")
let gameOver = document.querySelector(".losing")

// Set positions
let positionsArray = ["pos1" , "pos2" , "pos3" , "pos4" , "pos5" , "pos6" , "pos7" , "pos8" , "pos9" , "pos10"];

// Start screen and Shuffle positions
btn.onclick = function(){
    classname = "";
    classname += positionsArray[Math.floor(Math.random() * positionsArray.length)]
    theSecret.className = classname;
    rightImg.classList.add("test")
    // Make the start screen none
    startScr.classList.add("none")
    // losing
    if(rightImg.classList.contains("winning")){
        return 0;
    } else{
        // if winning class doesn't exist , after 1.30 minutes the player will lose the game
        setTimeout(() =>{
            if(rightImg.classList.contains("test")){
                gameOver.classList.remove("none")
                document.getElementById("wrong").play();
            } else{
                return 0;
            }
            setTimeout(() => {
                rightImg.classList.remove("winning");
                theSecret.className = "theSecret";
                startScr.classList.remove("none")
                gameOver.classList.add("none")
            }, 3000)
        }, 90000)
    }
}

// Winning
rightImg.onclick = function(){
    rightImg.classList.add("winning");
    theSecret.classList.remove(classname)
    rightImg.classList.remove("test")
    document.getElementById("right").play();
    // Restart the game after 3 seconds
    setTimeout(function(){
        rightImg.classList.remove("winning");
        theSecret.className = "theSecret";
        startScr.classList.remove("none")
    }, 3000)
}

// Rules
setTimeout(() => {
    alert("Game Rules: 1- you have to find the hidden image to win. 2- you have just 90 seconds to win if you don't,  you will lose the game")
}, 2000)
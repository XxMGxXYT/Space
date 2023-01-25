// List Algorithm

let list = document.querySelector(".traingle")
let list2 = document.querySelector(".traingle2")
let container = document.querySelector(".box")

list.onclick = function(){
    list.classList.add("test")
    list2.classList.remove("test2")
    container.classList.remove("none")
}

list2.onclick = function(){
    list2.classList.add("test2")
    list.classList.remove("test")
    container.classList.add("none")
}

// List Algorithm

// Turn On and Off Button

let onBtn = document.getElementById("on");
let offBtn = document.getElementById("off");
let allDivs = document.querySelectorAll(".test3")


if(window.sessionStorage.getItem("On")){
    allDivs.forEach(function(div){
    div.classList.add("blackColor")
    return myTest()
    })
} 

function myTest() {
    onBtn.style.backgroundColor = "red";
    offBtn.style.backgroundColor = "transparent";
    window.sessionStorage.removeItem("Off")
    window.sessionStorage.removeItem("Off2")
    };

allDivs.forEach(function(div){
    onBtn.addEventListener("click" , function(){
    window.sessionStorage.setItem("On" , myTest())
    window.sessionStorage.setItem("On2" , div.classList.add("blackColor"))
    })
})

if (window.sessionStorage.getItem("Off")) {
    allDivs.forEach(function(div) {
    div.classList.remove("blackColor")
    return myTest2()
})
} 

function myTest2() {
    offBtn.style.backgroundColor = "red";
    onBtn.style.backgroundColor = "transparent";
    window.sessionStorage.removeItem("On")
    window.sessionStorage.removeItem("On2")
};

allDivs.forEach(function(div) {
    offBtn.addEventListener("click", function() {
    window.sessionStorage.setItem("Off" , myTest2())
    window.sessionStorage.setItem("Off2" , div.classList.remove("blackColor"))
    })
})

// Turn On and Off Button
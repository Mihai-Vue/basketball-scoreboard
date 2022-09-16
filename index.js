let resultHome = 0
let resultGuest = 0
const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")


function add(e, item) {
    if(item == "home") {
        resultHome += e
        homeScore.innerHTML = resultHome
        liderHighlight()
    } else if(item == "guest") {
        resultGuest += e
        guestScore.innerHTML = resultGuest
        liderHighlight()
    }
}

function newGame() {
    resultHome = 0
    resultGuest = 0
    homeScore.innerHTML = resultHome
    guestScore.innerHTML = resultGuest
}

function liderHighlight() {
    if(resultHome > resultGuest) {
        homeScore.style.backgroundColor = "grey"
        guestScore.style.backgroundColor = "black"
    } else if(resultGuest > resultHome) {
        guestScore.style.backgroundColor = "grey"
        homeScore.style.backgroundColor = "black"
    } else {
        guestScore.style.backgroundColor = "black"
        homeScore.style.backgroundColor = "black"
    }
}

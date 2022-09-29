let resultHome = 0
let resultGuest = 0
const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")


function add(pointsToAdd, item) {
    if(item == "home") {
        resultHome += pointsToAdd
        homeScore.innerHTML = resultHome
        liderHighlight()
    } else if(item == "guest") {
        resultGuest += pointsToAdd
        guestScore.innerHTML = resultGuest
        liderHighlight()
    }
}

function newGame() {
    resultHome = 0
    resultGuest = 0
    homeScore.innerHTML = resultHome
    guestScore.innerHTML = resultGuest
    liderHighlight()
}


function liderHighlight() {
    if(resultHome > resultGuest) {
        homeScore.style.borderColor = "ea3546"
        guestScore.style.borderColor = "white"
    } else if(resultGuest > resultHome) {
        guestScore.style.borderColor = "ea3546"
        homeScore.style.borderColor = "white"
    } else {
        guestScore.style.borderColor = "white"
        homeScore.style.borderColor = "white"
    }
}

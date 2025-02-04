let team1El = document.getElementById("team1-el")
let team2El = document.getElementById("team2-el")
count1 = 0
count2 = 0

// function team1add1() {
//     count1 += 1
//     team1El.textContent = count1
// }

function add(increment,element){

    if (element === "team1-el"){
        count1 += increment
        team1El.textContent = count1
    } else {
        count2 += increment
        team2El.textContent = count2
    }
}

function reset(element){
    if (element === "team1-el"){
        count1 = 0
        team1El.textContent = count1
    } else {
        count2 = 0
        team2El.textContent = count2
    }
}


// function team1add2() {
//     count1 += 2
//     team1El.textContent = count1
// }

// function team1add3() {
//     count1 += 3
//     team1El.textContent = count1
// }

// function team2add1() {
//     count2 += 1
//     team2El.textContent = count2
// }
// function team2add2() {
//     count2 += 2
//     team2El.textContent = count2
// }
// function team2add3() {
//     count2 += 3
//     team2El.textContent = count2
// }

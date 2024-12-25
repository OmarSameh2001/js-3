function index (prop) {
    var res = []
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 1; i <= prop.length; i++) {
        var char = alphabet.indexOf(prop.toLowerCase().charAt(i-1))
        if (char != -1) res.push(char + 1)
    }
    alert(res)
}

function sortByNumber(prop) {
    var res = []
    var num = "123456789"
    prop = prop.split(" ")
    for (let i = 0; i < prop.length; i++) {
        for (let j = 0; j < prop[i].length; j++) {
            if (num.indexOf(prop[i].charAt(j)) != -1) {
                res[num.indexOf(prop[i].charAt(j))] = prop[i]
            }
        }
    }
    alert(res)
}

function specialMultiply(x, y) {
    if (x && y) return x * y
    return function (z) {
        return x * z
    }
}

function guessingGame(prop) {
    var ans = Math.floor(Math.random() * 10)
    return function(prop2){
        prop--
        if (prop2 == ans) {
            console.log("You got it!")
        }
        if (prop == 0) {
            console.log(`No more guesses the answer was ${ans}`)
            return
        } 
        if (prop2 > ans) {
            console.log("You're too high!")
        } else {
            console.log("You're too low!")
        }
    }
}
function test() {
    var guess = guessingGame(5)
    guess(3)
    guess(7)
    guess(0)
    guess(9)
    guess(5)
}
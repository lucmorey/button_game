console.log("HERE")
var playButton = document.querySelector('#play')
// var score = (currentScore)
var redButton = document.querySelector('#red')
var greenButton = document.querySelector('#green')
var blueButton = document.querySelector('#blue')
var currentColor = ""

function randomInt (n) {
    return Math.floor(Math.random()*n)
}

var arrayOfColors = ['red','green','blue']

function colorSelector() {
    var randomNum = randomInt(arrayOfColors.length)
    var chosenColor = arrayOfColors[randomNum]
    document.body.style.backgroundColor=chosenColor
    currentColor = chosenColor
}


playButton.onclick = function() {
    colorSelector()    
    }
redButton.onclick = function() {
    console.log("red"),(document.body.style.backgroundColor= 'red')
    }
greenButton.onclick = function() {
    console.log("green"),(document.body.style.backgroundColor= 'green')  
    }
blueButton.onclick = function() {
    console.log ("blue"),(document.body.style.backgroundColor= 'blue') 
    }

// currentScore = function() {
//     if (redButton.onclick && currentColor === 'red'){
//         console.log('correct')
//     }


// var currentColor = ?
// var currentScore = ?
// var currentScore = []
// if 

// var colorButtons = [redButton, greenButton, blueButton]
// for (var i = 0; i<colorButtons.length; =+ 1



//     return Math.floor(math.Random()* n)
// }

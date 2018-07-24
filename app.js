const rockInput = document.getElementById('rock')
const paperInput = document.getElementById('paper')
const scissorsInput = document.getElementById('scissors')

var humanChoice
var userScore = 0
var compScore = 0

function RPS () {
  var compChoice = Math.floor(Math.random() * 3)

  if (compChoice === humanChoice) {
    document.getElementById('result').innerHTML = "It's a tie!"
    userScore++
    compScore++
    document.getElementById('user-score').innerHTML = userScore
    document.getElementById('comp-score').innerHTML = compScore
  } else if ((compChoice - humanChoice + 3) % 3 === 1) {
    document.getElementById('result').innerHTML = 'You win!'
    userScore++
    document.getElementById('user-score').innerHTML = userScore
  } else {
    document.getElementById('result').innerHTML = 'You lose!'
    compScore++
    document.getElementById('comp-score').innerHTML = compScore
  }
}

rockInput.addEventListener('click', function () {
  humanChoice = 0
  RPS()
})

paperInput.addEventListener('click', function () {
  humanChoice = 1
  RPS()
})

scissorsInput.addEventListener('click', function () {
  humanChoice = 2
  RPS()
})

var userScore = 0
var compScore = 0
const userScore_span = document.getElementById('user-score')
const compScore_span = document.getElementById('comp-score')
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')

function RPS (userChoice) {
  const compChoice = Math.floor(Math.random() * 3)

  if (compChoice === userChoice) {
    return 0
  } else if ((compChoice - userChoice + 3) % 3 === 1) {
    return 1
  } else {
    return 2
  }
}

function main () {
  rock_div.addEventListener('click', function () {
    if (RPS(0) === 0) {
      result_p.innerHTML = "It's a draw!"
      rock_div.classList.add('gray-glow')
      setTimeout(function () { rock_div.classList.remove('gray-glow') }, 500)
    } else if (RPS(0) === 1) {
      result_p.innerHTML = 'Rock beats scissors, You win!'
      userScore++
      userScore_span.innerHTML = userScore
      rock_div.classList.add('green-glow')
      setTimeout(function () { rock_div.classList.remove('green-glow') }, 500)
    } else {
      result_p.innerHTML = 'Paper beats rock, You lose...'
      compScore++
      compScore_span.innerHTML = compScore
      rock_div.classList.add('red-glow')
      setTimeout(function () { rock_div.classList.remove('red-glow') }, 500)
    }
  })

  paper_div.addEventListener('click', function () {
    if (RPS(0) === 0) {
      result_p.innerHTML = "It's a draw!"
      paper_div.classList.add('gray-glow')
      setTimeout(function () { paper_div.classList.remove('gray-glow') }, 500)
    } else if (RPS(0) === 1) {
      result_p.innerHTML = 'Paper beats rock, You win!'
      userScore++
      userScore_span.innerHTML = userScore
      paper_div.classList.add('green-glow')
      setTimeout(function () { paper_div.classList.remove('green-glow') }, 500)
    } else {
      result_p.innerHTML = 'Scissors beat paper, You lose...'
      compScore++
      compScore_span.innerHTML = compScore
      paper_div.classList.add('red-glow')
      setTimeout(function () { paper_div.classList.remove('red-glow') }, 500)
    }
  })

  scissors_div.addEventListener('click', function () {
    if (RPS(0) === 0) {
      result_p.innerHTML = "It's a draw!"
      scissors_div.classList.add('gray-glow')
      setTimeout(function () { scissors_div.classList.remove('gray-glow') }, 500)
    } else if (RPS(0) === 1) {
      result_p.innerHTML = 'Scissors beat paper, You win!'
      userScore++
      userScore_span.innerHTML = userScore
      scissors_div.classList.add('green-glow')
      setTimeout(function () { scissors_div.classList.remove('green-glow') }, 500)
    } else {
      result_p.innerHTML = 'Rock beats scissors, You lose...'
      compScore++
      compScore_span.innerHTML = compScore
      scissors_div.classList.add('red-glow')
      setTimeout(function () { scissors_div.classList.remove('red-glow') }, 500)
    }
  })
}

main()

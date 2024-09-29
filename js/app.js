/*-------------------------------- Constants --------------------------------*/
// these are the combinations used to check if I won
const winningCombos = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
]

/*---------------------------- Variables (state) ----------------------------*/
//the squares are considered an array board[0] to board[8]
let board = []
//the turn starts with X later update in functions
let turn = '🚀'
//to be changed to true later if someone wins
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.getElementById('reset')

/*-------------------------------- Functions --------------------------------*/

const handleClick = (event) => {
  const squareIndex = event.target.id
  if (board[squareIndex] !== '' || winner) return

  placePiece(squareIndex)
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  render()
}

const placePiece = (index) => {
  board[index] = turn
}

const checkForWinner = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i]
    if (
      board[combo[0]] !== '' &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      winner = true
      break
    }
  }
}

const checkForTie = () => {
  if (winner) return

  tie = true
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      tie = false
      break
    }
  }
}

const switchPlayerTurn = () => {
  if (winner) {
    return
  }
  if (turn === '🚀') {
    turn = '👽'
  } else {
    turn = '🚀'
  }
}

const updateBoard = () => {
  squareEls.forEach((square, index) => {
    square.textContent = board[index]
  })
}

const updateMessage = () => {
  if (winner) {
    messageEl.textContent = `${turn} wins!`
  } else if (tie) {
    messageEl.textContent = `It's a tie!`
  } else {
    messageEl.textContent = `It's ${turn}'s turn.`
  }
}

const render = () => {
  updateBoard()
  updateMessage()
}

const init = () => {
  //the squares are considered an array board[0] to board[8]
  board = ['', '', '', '', '', '', '', '', '']
  //the turn starts with 🚀 later update in functions
  turn = '🚀'
  //to be changed to true later if someone wins
  winner = false
  //to be changed to true later if it is a tie
  tie = false
  //
  render()
}

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
  square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', init)

init()

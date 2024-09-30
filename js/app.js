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

/*------------------------ Cached Element References ------------------------*/
//asigning all squares .sqr of the board to a variable
const squareEls = document.querySelectorAll(`.sqr`)
//asigning the message to a variable
const messageEl = document.querySelector(`#message`)
// asigning the resent button
const resetBtnEl = document.getElementById(`reset`)

/*-------------------------------- Functions --------------------------------*/

//clicking goes through the function to check if the condition meets and excutes more than 1 function after checking
const handleClick = (event) => {
  const squareIndex = event.target.id
  if (board[squareIndex] !== `` || winner) return
  //mutiple functions to go through and execute
  placePiece(squareIndex)
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  render()
}

//This parameter represents the index of the square in the game board array where the current player's symbol should be placed
const placePiece = (index) => {
  board[index] = turn
}

// just check who won
const checkForWinner = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i]
    if (
      board[combo[0]] !== `` &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    ) {
      winner = true
      break
    }
  }
}

// check if it is a tie
const checkForTie = () => {
  if (winner) return

  tie = true
  for (let i = 0; i < board.length; i++) {
    if (board[i] === ``) {
      tie = false
      break
    }
  }
}

// each player has 1 turn and it switches to the other turn and so on
const switchPlayerTurn = () => {
  // if win then don't change anything
  if (winner) {
    return
  }
  //switch
  if (turn === `🚀`) {
    turn = `👽`
  } else {
    turn = `🚀`
  }
}

// changing the text of the square and updating the content
const updateBoard = () => {
  squareEls.forEach((square, index) => {
    square.textContent = board[index]
  })
}

//updates the player of what is the current status of the game
const updateMessage = () => {
  if (winner) {
    messageEl.textContent = `${turn} wins!`
  } else if (tie) {
    messageEl.textContent = `It's a tie!`
  } else {
    messageEl.textContent = `𝓘𝓽'𝓼 ${turn}'𝓼 𝓽𝓾𝓻𝓷.`
  }
}

// this is the extra tab to guide the players before playing
function clearHighlights() {
  document.querySelectorAll(`.sqr`).forEach((square, index) => {
    square.textContent = board[index]
  })
}

// Function to highlight a winning combination
function highlightCombo(combo) {
  // clear before hovering again
  clearHighlights()
  combo.forEach((index) => {
    document.getElementById(index).textContent = `🚀`
  })
}
//function to execute 2 functions according to the exercise 🐝
const render = () => {
  updateBoard()
  updateMessage()
}

const init = () => {
  //the squares are considered an array board[0] to board[8]
  board = [``, ``, ``, ``, ``, ``, ``, ``, ``]
  //the turn starts with 🚀 later update in functions
  turn = `🚀`
  //to be changed to true later if someone wins
  winner = false
  //to be changed to true later if it is a tie
  tie = false
  render()
}

/*----------------------------- Event Listeners -----------------------------*/
// just listen to each square 🤷‍♂️
squareEls.forEach((square) => {
  square.addEventListener(`click`, handleClick)
})

// just initiate reset button
resetBtnEl.addEventListener(`click`, init)

init()
const buttons = document.querySelectorAll(`#winning-combos button`)
// used mdn to change from click to mouseenter useful
buttons.forEach((button, index) => {
  // Highlight combo on hover
  button.addEventListener(`mouseenter`, () => {
    highlightCombo(winningCombos[index])
  })

  // Clear highlight when hover stops
  button.addEventListener(`mouseleave`, () => {
    clearHighlights()
  })
})
//(30)

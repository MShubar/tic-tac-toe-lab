/*-------------------------------- Constants --------------------------------*/
/*---------------------------- Variables (state) ----------------------------*/
//this represents the array squares
let board = []
//the starting turn is X as always
let turn = ["X", "O"]
// who won out of the 2
let winner = false
// if it is a tie or not
let tie = false

/*------------------------ Cached Element References ------------------------*/
//squares and messages
const squareEls = document.querySelector(".sqr")
const messageEl = document.querySelector("#message")

// /*-------------------------------- Functions --------------------------------*/

const EmptySqureIndex = (event) => {
  const squareId = event.target.id
  board.push(squareId)
  console.log(board)
}

const switchPlayer = () => {
  turn = turn === "X" ? "O" : "X"
}
const render = () => {}
const updateBoard = () => {
  board.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonValue = button.textContent
    })
  })
}
const handleBoxClick = (event) => {
  event.preventDefault()
  const box = even.target
  if(box.classList.contains())
}
const init = (event) => {
  EmptySqureIndex(event)
  switchPlayer()
  updateBoard()
}

/*----------------------------- Event Listeners -----------------------------*/
document.querySelectorAll(".sqr").forEach((div) => {
  div.addEventListener("click", init)
})

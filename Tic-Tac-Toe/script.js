let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector('#newGame-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;

const winningPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Iterating over all the boxes.
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});


const resetGame = () => {
    turnO = true;
    msgContainer.classList.add('hide')
    enabledBoxes();
}


// Disabling the boxes after winning
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};


// Enabling the boxes after pressing the reset button
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}


// Show Winner Function
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
}


// To check for the winning patterns
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log('Winner', pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};


resetBtn.addEventListener('click', resetGame)

const boxes = document.querySelectorAll(".box");
const restartBtn = document.getElementById("restart-btn");
let currentPlayer = "x";

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (!box.classList.contains("x") && !box.classList.contains("o")) {
      box.classList.add(currentPlayer);
      box.textContent = currentPlayer;
      if (checkForWinner()) {
        alert(`${currentPlayer.toUpperCase()} wins!`);
        restart();
      } else if (checkForDraw()) {
        alert("It's a draw!");
        restart();
      } else {
        currentPlayer = currentPlayer === "x" ? "o" : "x";
      }
    }
  });
});

restartBtn.addEventListener("click", restart);

function checkForWinner() {
  return checkRows() || checkColumns() || checkDiagonal();
}

function checkRows() {
  return checkRow(0) || checkRow(3) || checkRow(6);
}

function checkRow(startIndex) {
  return boxes[startIndex].classList.contains(currentPlayer) && boxes[startIndex + 1].classList.contains(currentPlayer) && boxes[startIndex + 2].classList.contains(currentPlayer);
}

function checkColumns() {
  return checkColumn(0) || checkColumn(1) || checkColumn(2);
}

function checkColumn(startIndex) {
  return boxes[startIndex].classList.contains(currentPlayer) && boxes[startIndex + 3].classList.contains(currentPlayer) && boxes[startIndex + 6].classList.contains(currentPlayer);
}

function checkDiagonal() {
  return checkLeftDiagonal() || checkRightDiagonal();
}

function checkLeftDiagonal() {
  return boxes[0].classList.contains(currentPlayer) && boxes[4].classList.contains(currentPlayer) && boxes[8].classList.contains(currentPlayer);
}

function checkRightDiagonal() {
  return boxes[2].classList.contains(currentPlayer) && boxes[4].classList.contains(currentPlayer) && boxes[6].classList.contains(currentPlayer);
}

function checkForDraw() {
  return [...boxes].every(box => box.classList.contains("x") || box.classList.contains("o"));
}

function restart() {
  boxes.forEach(box => {
    box.classList.remove("x", "o");
    box.textContent = "";
  });
  currentPlayer = "x";
}

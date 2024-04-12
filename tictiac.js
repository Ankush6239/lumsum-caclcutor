let boxes = document.querySelectorAll(".box");
let trunO = true;

const WinPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (trunO) {
      box.innerText = "O";
      trunO = false;
    } else {
      box.innerText = "X";
      trunO = true; // Corrected from valtrunO to trunO
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of WinPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) { // Corrected pos2vl to pos2val
        console.log("Winner:", pos1val);
      }
    }
  }
};

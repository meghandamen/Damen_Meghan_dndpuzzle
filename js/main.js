console.log("Javascript connected");

//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");

const changePuzzlePiece = document.querySelector(".puzzle-pieces");
const resetBoard = document.querySelector("#resetBut")
let draggedPiece;

console.log(theButtons);
console.log(puzzleBoard);

//functions
function changeBGImage() {
    console.log("changeBGImage called");
    console.log(this.id);
    //background-image: url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url('./images/backGround${this.id}.jpg')`;

    //method 2
    //console.log(evet.curremtTarget.id);
    //puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg)`;


    //bug fix 1
    puzzlePieces.forEach(piece => changePuzzlePiece.appendChild(piece));

    //changes piecs along with the background
    puzzlePieces[0].src = `./images/topLeft${this.id}.jpg`;
    puzzlePieces[1].src = `./images/topRight${this.id}.jpg`;
    puzzlePieces[2].src = `./images/bottomLeft${this.id}.jpg`;
    puzzlePieces[3].src = `./images/bottomRight${this.id}.jpg`;
}

function handleStartDrag() {
    console.log(`started dragging ${this}`);
    draggedPiece = this;
}

function handleOver(e) {
    console.log("dragged over")
    e.preventDefault();
}

function handleDrop() {
    //bug fix 2
    if(this.children.length >= 1) {
        return;
    }

    this.appendChild(draggedPiece); 
}  

//bug fix 2
function reset() {
    puzzlePieces.forEach(piece => changePuzzlePiece.appendChild(piece));
}

//event lisnerer
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

resetBoard.addEventListener("click", reset);
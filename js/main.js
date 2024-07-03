console.log("Javascript connected");

//variables
const reset = document.querySelectorAll(".resetBut")
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");

const changePuzzlePiece = document.querySelector(".puzzle-pieces");
const resetB = document.querySelector("#resetBut");

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
}

function changeTLImage() {
    console.log("changeTLImage called");
    console.log(this.id);
    puzzlePieces.style.backgroundImage = `url('./images/topLeft${this.id}.jpg')`;
}

function handleStartDrag() {
    console.log(`started dragging ${this}`);
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("dragged over");
    
}

function handleDrop() {
    //bug fix 2
    if(this.childern.length >= 1) {
        console.log("this spot is full");
        return;
    }
    
    this.appendChild(draggedPiece);
}

function reset() {
    puzzlePieces.forEach(piece => changePuzzlePiece.appendChild(piece));
}

//event lisnerer
theButtons.forEach(button => button.addEventListener("click", changeBGImage, changeTLImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

resetB.addEventListener("click", reset);


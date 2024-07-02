console.log("Javascript connected");

//variables
const reset = document.querySelectorAll(".resetBut")
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
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
    puzzlePieces.style.image = `url('./images/topLeft1.jpg')`;
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
this.appendChild(draggedPiece); 
}  

if(dropZones >= 0) {
    function handleDrop() {
        this.appendChild(true);
    }
} else if(dropZones >= 1) {
    function handleDrop() {
        this.appendChild(false);
    }
}

//event lisnerer
theButtons.forEach(button => button.addEventListener("click", changeBGImage, changeTLImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

reset.forEach(zone => zone.addEventListener("click", resetBoard));
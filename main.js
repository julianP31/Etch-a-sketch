let $container = document.querySelector("#container")

defaultSize()

function defaultSize() {
    createSquare(16)
    modifyCss(16)
}

function createSquare(size) {
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div")
        square.addEventListener("mouseover", mouseOver)
        square.className = "square"
        $container.appendChild(square)
    }
}

function modifyCss(size) {
    $container.style = `grid-template-columns:repeat(${size},1fr); grid-template-rows:repeat(${size},1fr)`
}
function randomColor(e) {

}
function mouseOver(e) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    e.target.style = `background-color:rgb(${r},${g},${b})`;

}

let $buttonSize = document.querySelector("#btn-change-size").addEventListener("click",function (e){
    changeSize()
})

function changeSize() {
    let size =prompt("change the size of the grid")
    
    if (size !== null){
         size = parseInt(size)
         if (size < 1 || size >100 || Number.isNaN(size)){
             alert("choose the size of the grid (only numbers from 1 to 100)")
             changeSize()
         }
         else{
            removeOldDivs()
            createSquare(size)
            modifyCss(size)
         }
    }
   
   
}

function removeOldDivs() {
    let $square = document.querySelectorAll(".square")
    for (let i = 0; i < $square.length; i++) {
        $square[i].remove()
    }
}

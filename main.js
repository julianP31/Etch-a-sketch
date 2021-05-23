let $container = document.querySelector("#container")

createSquare(30)
modifyCss(30)
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

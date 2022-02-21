const gameboard = (()=>{
    let gameboard = []
    return {gameboard}
})();



//factory functions
const player = (name, figure)=>{
    return {name, figure}
}

let player1
let player2

const boxes = document.querySelectorAll('.box')


for(let i=0; boxes.length; i++){
    boxes[i].addEventListener('click', ()=>{
        boxes[i].setAttribute("style", "background-color: red;")
    })
}

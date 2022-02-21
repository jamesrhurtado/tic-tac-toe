const board = (()=>{
    let gameboard = [['', '', ''], ['', '', ''], ['', '', '']]
    return {gameboard}
})();



//factory functions
const player = (name, figure) => {
    const getName = () =>  name
    const getFigure = () => figure
    const markBox = (row, column) => {
        if(board.gameboard[row][column] == ''){
            board.gameboard[row][column] == getFigure()
        }
    }
    return {getName, getFigure, markBox}
}



/*
const boxes = document.querySelectorAll('.box')


for(let i=0; boxes.length; i++){
    boxes[i].addEventListener('click', ()=>{
        boxes[i].setAttribute("style", "background-color: red;")
    })
}
*/
const board = (() => {
    let gameboard = ['', '', '', '', '', '', '', '', '']
    return {gameboard}
})();



//factory functions
const player = (name, figure) => {
    const getName = () =>  name
    const getFigure = () => figure
    const markBox = (box) => {
        if(board.gameboard[box] == ''){
            board.gameboard[box] == getFigure()
        }
    }
    return {getName, getFigure, markBox}
}

const displayMoves = (() => {
    const boxes = document.querySelectorAll('.box')
    const play = () =>{
        for(let i=0; i<board.gameboard.length; i++){
            boxes[i].textContent = board.gameboard[i]
            boxes[i].addEventListener('click', ()=>{
                boxes[i].setAttribute("style", "background-color: red;")
                //send ith box to mark
            });
        }
    }

    const updateGameboard = () => {
        for(let i=0; i<board.gameboard.length; i++){
            boxes[i].textContent = board.gameboard[i]
        }
    }
    return {
        play, updateGameboard
    }
})();
displayMoves.play()
/*
const boxes = document.querySelectorAll('.box')


for(let i=0; boxes.length; i++){
    boxes[i].addEventListener('click', ()=>{
        boxes[i].setAttribute("style", "background-color: red;")
    })
}
*/
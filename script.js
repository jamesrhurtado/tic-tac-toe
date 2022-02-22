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
            return true
        }else{
            return false
        }
    }
    return { getName, getFigure, markBox }
}

const displayController = (() => {
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
    return { play, updateGameboard }
})();


const game = () => {
    let user1
    let user2
    let userTurn

    const setupGame = (player1, player2) => {
        user1 = player1
        user2 = player2
        displayController.play()
    }

    const changeTurn = () => {
        if(userTurn == null){
            userTurn = user1
        }else if(userTurn === user1.getName()){
            userTurn = user2
        }else{
            userTurn = user1
        }
    }

    const move = (box) => {
        let userPlayed = userTurn.markBox()
        if(userPlayed){
            //check victory
            //check tie
        }
    }


    const isAVictory = () => {
        if (board.gameboard[0] === board.gameboard[1] && board.gameboard[1] === board.gameboard[2] && board.gameboard[0] !== '') {return true} 
        if (board.gameboard[3] === board.gameboard[4] && board.gameboard[4] === board.gameboard[5] && board.gameboard[3] !== '') {return true}
        if (board.gameboard[6] === board.gameboard[7] && board.gameboard[7] === board.gameboard[8] && board.gameboard[6] !== '') {return true}
        if (board.gameboard[0] === board.gameboard[3] && board.gameboard[3] === board.gameboard[6] && board.gameboard[0] !== '') {return true}
        if (board.gameboard[1] === board.gameboard[4] && board.gameboard[4] === board.gameboard[7] && board.gameboard[1] !== '') {return true}
        if (board.gameboard[2] === board.gameboard[5] && board.gameboard[5] === board.gameboard[8] && board.gameboard[2] !== '') {return true}
        if (board.gameboard[0] === board.gameboard[4] && board.gameboard[4] === board.gameboard[8] && board.gameboard[0] !== '') {return true}
        if (board.gameboard[2] === board.gameboard[4] && board.gameboard[4] === board.gameboard[6] && board.gameboard[2] !== '') {return true}
    }


    const isATie = () => {
        for(let i=0; i<board.gameboard.length; i++){
            if(board.gameboard[i] === ''){
                return false
            }
        }
        return true
    }


}










/*
const boxes = document.querySelectorAll('.box')


for(let i=0; boxes.length; i++){
    boxes[i].addEventListener('click', ()=>{
        boxes[i].setAttribute("style", "background-color: red;")
    })
}
*/
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
            board.gameboard[box] = getFigure()
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
                game.move(i)
            });
        }
    }

    const updateGameboard = () => {
        for(let i=0; i<board.gameboard.length; i++){
            boxes[i].textContent = board.gameboard[i]
        }
    }

    const resetGameboard = () => {
        for(let i=0; i<board.gameboard.length; i++){
            board.gameboard[i] = ''
        }
        updateGameboard()
    }
    return { play, updateGameboard, resetGameboard }
})();


const game = (() => {
    let user1
    let user2
    let userTurn

    const setupPlayers = (player1, player2) => {
        user1 = player1
        user2 = player2
        displayController.play()
        changeTurn()
    }

    const changeTurn = () => {
        if(userTurn === undefined){
            userTurn = user1
        }else if(userTurn.getName() === user1.getName()){
            userTurn = user2
        }else{
            userTurn = user1
        }
    }

    const move = (box) => {
        let userPlayed = userTurn.markBox(box)
        console.log(userTurn.getName())
        if(userPlayed){
            displayController.updateGameboard()
            if(isAVictory()){
                alert(`${userTurn.getName()} won`)
            }else if(isATie()){
                alert(`It is a tie`)
            }else{
                changeTurn()
            }
        }
    }

    const isAVictory = () => {
        if ((board.gameboard[0] === board.gameboard[1] && board.gameboard[1] === board.gameboard[2] && board.gameboard[0] !== '') ||
            (board.gameboard[3] === board.gameboard[4] && board.gameboard[4] === board.gameboard[5] && board.gameboard[3] !== '') ||
            (board.gameboard[6] === board.gameboard[7] && board.gameboard[7] === board.gameboard[8] && board.gameboard[6] !== '') ||
            (board.gameboard[0] === board.gameboard[3] && board.gameboard[3] === board.gameboard[6] && board.gameboard[0] !== '') ||
            (board.gameboard[1] === board.gameboard[4] && board.gameboard[4] === board.gameboard[7] && board.gameboard[1] !== '') ||
            (board.gameboard[2] === board.gameboard[5] && board.gameboard[5] === board.gameboard[8] && board.gameboard[2] !== '') ||
            (board.gameboard[0] === board.gameboard[4] && board.gameboard[4] === board.gameboard[8] && board.gameboard[0] !== '') ||
            (board.gameboard[2] === board.gameboard[4] && board.gameboard[4] === board.gameboard[6] && board.gameboard[2] !== '')) {
                return true}
             else{
                return false
            }
    }

    const isATie = () => {
        for(let i=0; i<board.gameboard.length; i++){
            if(board.gameboard[i] === ''){
                return false
            }
        }
        return true
    }

    return {setupPlayers, move}
})();


const generalController = (() =>{
    const btnNewGame = document.querySelector('.btn-new')
    btnNewGame.addEventListener('click', () =>{
        displayController.resetGameboard()
        let name1 = prompt("What is the name of the first player? ")
        let name2 = prompt("What is the name of the second player? ")
        let player1 = player(name1 || "Juan", 'x')
        let player2 = player(name2 || 'Juan 2', 'o')
        game.setupPlayers(player1, player2)
    })
})()


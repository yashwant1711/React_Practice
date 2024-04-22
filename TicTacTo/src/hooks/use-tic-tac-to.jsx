import { useState } from 'react'

const iValue = () => Array(9).fill(null);
function useTicTacTo() {
    const [board, setBoard] = useState(iValue());
    const [xturn, setXturn] = useState(true);

    const winnerPatterns = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < winnerPatterns.length; i++) {
            const [a, b, c] = winnerPatterns[i]
            if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a]
            }
        }

        return null
    }

    const handleClick = (index) => {
        const winner = calculateWinner(board)
        // console.log(board);
        if(winner || board[index] ) return
        
        const newBoard = [...board]
        newBoard[index] = xturn ? "X" : "O";
        setBoard(newBoard)
        setXturn(!xturn)
    }

    const getStatus = () => {
        const winner = calculateWinner(board)
        if(winner) return `Player${winner} has won`
        if(!board.includes(null)) return 'It is a tie'
        return `Player${xturn ? "X" : "O"}'s turn`
    }

    const resetGame = () => {
        setBoard(iValue())
        setXturn(true)
    }

    return {
        board,
        xturn,
        handleClick,
        getStatus,
        resetGame,
        calculateWinner
    }
}

export default useTicTacTo
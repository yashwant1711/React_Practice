import './App.css'
import useTicTacTo from './hooks/use-tic-tac-to'


function App() {
 const {board, resetGame, getStatus, handleClick} = useTicTacTo()

  return (
    <div className="game">
      <div className="status">
        {getStatus()} 
        <button className='reset-button' onClick={resetGame}>Reset</button>
      </div>

      <div className="board">
        {board.map((B, index) => {
          return <button className='cell' key={index} onClick={() => handleClick(index)} disabled={B !== null}> {B}</button>
        })}
      </div>
    </div>
  )
}

export default App

import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import Board from './Board';
import Message from './Message';
import Announcement from './Announcement';

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState("")
    const xO = xIsNext ? 'X' : 'O'

    const handleClick = (i) => {
        const moves = [...squares];
        moves[i] = xO;
        setSquares(moves);
        setXIsNext(!xIsNext);
        const winner = calculateWinner(moves)
        if (winner) {
            setWinner(winner);
        }
    }


    const handleStart = () => {
        setSquares(Array(9).fill(null))
        setXIsNext(true);
        setWinner(null)
    }
    

    return (
        <div className={classNames("Game", {"Game--winner": !!winner})}>
            <div className="game-action">
                <h1>React Tic Tac Toe</h1>
                <Board onClick={handleClick} squares={squares}/>
            </div>
            <div className="game-info">
                <Message hasStarted={squares.some(s=>s)} isXNext={xIsNext}/>
                {!!winner && <Announcement winner={winner} onStart={handleStart}/>}
                <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
            </div>
        </div>
    )
}

export default Game;

const calculateWinner = (squares) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    let winner = lines.reduce((memo, [a,b,c]) => {
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c] ) {
            memo = squares[a];
        }
        return memo;
    }, "");

    if(!winner && squares.every(s=>s)) {
        winner= "tie";
    }
    return winner;

} 


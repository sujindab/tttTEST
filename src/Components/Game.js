import React,{useState} from 'react'
import { calculateWinner } from '../helper'
import Board from './Board'

const Game = () => {
    let n =4
    const table = useState(Array(n).fill().map(()=>Array(n).fill(null)));
    // console.log("table",table[0])
    const [xIsNext,setXisNext] = useState(true);
    const xO = xIsNext ? "X" : "O"
    // console.log("squares send ",table[0])

    
    const handleClick = (i,j) => {
        // console.log("1111 table i j : ",table[i][j])
        // console.log("i j : ",i+" "+j)
        table[0][i][j] = xO;
        setXisNext(!xIsNext);
        console.log((table[0]))
        console.log("2222 table i j : ",(table[0])[i][j])
        console.log((table[0])[i][j])
    }

    return(
        <>
            <h1>TIC TAC TOE</h1>
            <Board squares={table[0]} onClick={handleClick} num={n}/>
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {/* {renderMoves()} */}
                </div>
                <h3>{"Next Player : " + xO}</h3>
            </div>
            
        </>
    )
}

export default Game;
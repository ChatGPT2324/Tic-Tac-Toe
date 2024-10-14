import { useState } from 'react'
import Square from './Square.jsx'
import './App.css'
function App() {
    const[isXTurn,setIsXTurn] = useState(true);
    const[squares,setSquares]=useState(Array(9).fill(null))
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
 function handleClick(i){
     if(squares[i]||winner(squares)){return}
     const nextSquare=squares.slice();
     if(isXTurn){
         nextSquare[i]='X';
     }else{
         nextSquare[i]='O';
     }
     setIsXTurn(!isXTurn)
     setSquares(nextSquare);
 }
 function winner(squares){
        const winPatterns = [
            // Horizontal wins
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // Vertical wins
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // Diagonal wins
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let i = 0; i < winPatterns.length; i++){
            const[a,b,c]=winPatterns[i];
            if(squares[a]&& squares[a]===squares[b]&&squares[a]===squares[c]){
                return(squares[a])
            }
        }
        return null;
    }
    const win = winner(squares);
    const isDraw = squares.every(square => square !== null) && !win;

    let status;
    if (win) {
        status = 'Winner: ' + win;
    } else if (isDraw) {
        status = 'It\'s a draw!';
    } else {
        status = 'Next player: ' + (isXTurn ? 'X' : 'O');
    }
function reset(){
setSquares(Array(9).fill(null))
}
    return (
        <>

            <h1>Tic Tac Toe</h1>
            <h2>{status}</h2>
            <div className="grid">
                {
                    numbers.map((number) => {
                        return (
                            <Square key={number} value={squares[number]} handleClick={() => handleClick(number)}/>
                        )
                    })
                }
            </div>
            <button id="reset" onClick={reset}>Reset Game</button>
            <footer>Made By Prathamesh Kumbhar❤️</footer>
        </>
    )
}

export default App

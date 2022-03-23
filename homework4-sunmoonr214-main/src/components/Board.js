import React from "react";
import { useState } from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {
    var status = "";
    var winner = null;
    const [board, setBoard] = useState(Array(9).fill(null));
    const [next, setNext] = useState(true);
    const winCombinations = [
          [0, 1, 2],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6]
      ];

    function handleClick(square) { 
      const current = [...board];
      if (checkWin(current) || current[square]) {
        return;
      }
        current[square] = next ? "X":"O";
        setBoard(current);
        next = setNext(!next);
    }

    function checkAllfilled(board){
      let filled = true;
      for(let i = 0;i < board.length; i++){
        if(board[i] === null){
          filled = false;
        }
      }
      if (filled && winner === null) {
        status = "It's a tie";
      }
    }

    function checkWin(board) { 
      for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        if (board[a] && (board[a] === board[b]) && (board[a] === board[c])) {
          winner = board[a];
        }
      }
      if (winner) { 
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (next ? "X":"O");
      }
    }

    checkWin(board);
    checkAllfilled(board);
  
    function renderSquare(i) {
      return (
      <Square 
      value = {board[i]} 
      onClick = {() => handleClick(i)}/>
      );
    }
    
    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{status}</div>
        </div>
    )
}

export default Board;
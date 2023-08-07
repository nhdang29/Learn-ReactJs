import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if( winner || boardCopy[index]) return ;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const handleResetGame = () =>{
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <p className="game-winner">Winner is {winner}</p>}
      <button className="game-reset" onClick={handleResetGame}>Reset Game</button>
    </div>
  );
};

export default Game;

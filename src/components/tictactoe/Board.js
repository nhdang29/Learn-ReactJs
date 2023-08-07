import React from "react";
import Cell from "./Cell";

const Board = (props) => {

    
  return (
    <div className="game-board">
      {
        props.cells
            .map((item, index)=>{
                return <Cell key={index} onClick={()=>props.onClick(index)} value={item}></Cell>
            })
      }
    </div>
  );
};


export default Board;

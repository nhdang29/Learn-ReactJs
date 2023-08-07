import React from 'react';

const Cell = ({value, onClick}) => {
    return (
        <div className={`game-cell ${value ? `${value}-color` : ""}`} onClick={onClick}>
            {value}
        </div>
    );
};


export default Cell;

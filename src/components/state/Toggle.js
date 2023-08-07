import React, { useState } from 'react';
import "./Toggle.css";

const Toggle = () => {
    const [on, setOn] = useState(false);

    const handlerToggle = () => {
        setOn(!on);
    }


    return (
        <div className={on ? "toggle" : "toggle active"} onClick={handlerToggle}>
            <div className={on ? "spinner" : "spinner active"}></div>
        </div>
    );
};

export default Toggle;
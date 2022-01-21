import React, { useState } from 'react';
var timer;
const Timer = () => {
    const [fun, setFun] = useState("start")
    const [num, setNum] = useState(0);
    
    const handleClick = (e) => {
        if (e === "start") {
            setFun("pause");
            timer = setInterval(() => {
                setNum((prev) => {
                    return prev + 1;
                })
            }, 1000)
        }
        else if (e === "pause") {
            setFun("reset");
            clearInterval(timer)
        }
        else {
            setFun("start");
            setNum(0);
        }
    }
    return <div>
        <div>Timer: {num}</div>
        <button onClick={() => { handleClick(fun) }}>
            {fun == "start" ? "start" : fun == "pause" ? "Pause" : "reset"}
        </button>
    </div>;
};

export default Timer;

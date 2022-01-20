import React, { useState } from 'react';

const Timer = () => {
    const [start,setStart] = useState("");
    const [end,setEnd] = useState("");
    const [timer,setTimer] = useState();

    const handleClick = () => {
        setTimer(start);
        const time = setInterval(()=>{
            setTimer((prev) => {
                if (+prev === +end) {
                    clearInterval(time);
                    setStart("");
                    setEnd("");
                    return end;
                }
                return +prev+1;
            })
        },1000);
    }

    return(
        <>
            <h2>*** TIMER ***</h2>
            <div>Timer: {timer}</div>
            <input onChange={(el)=>{setStart(el.target.value)}} type="number" value={start} placeholder="start" />
            <input onChange={(el)=>{setEnd(el.target.value)}} type="number" value={end} placeholder="end" />
            <button onClick={handleClick}>Start Timer</button><br/><hr/>
        </>
    )
}
export default Timer;
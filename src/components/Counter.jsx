import React, { useState } from 'react';

const Counter = () => {
    const [num,setNum] = useState(0);
  return <div>
      <h2>*** COUNTER ***</h2>
      <div>Counter: {num}</div>
      <button onClick={()=>{setNum(num+1)}}>+</button>
      <button onClick={()=>{setNum(num-1)}}>-</button><br/><hr/>
  </div>;
};

export default Counter;

import React, { useState } from 'react';

const Counter = () => {
    const [num,setNum] = useState(0);
  return <div>
      <h2>*** COUNTER ***</h2>
      <div>Counter: {num}</div>
      <button onClick={()=>{setNum(num+1)}}>Add</button>
      <button onClick={()=>{setNum(num-1)}}>Sub</button><br/><hr/>
  </div>;
};

export default Counter;

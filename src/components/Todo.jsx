import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);

    const handleClick = () => {
        const allData = {
            name: todo,
            id: nanoid(4),
            status: false
        }
        setData([...data, allData]);
        setTodo("");
    }

    const handleDelete = (id) => {
        for (let i = 0; i < data.length; i++) {
            if (id === data[i].id) data.splice(i, 1);
            setFlag(true);
        }
    }

    useEffect(() => {
        setFlag(false)
    }, [data, flag]);

    return <div>
        <h2>*** TODO ***</h2>
        <input onChange={(el) => { setTodo(el.target.value) }} type="text" value={todo} placeholder='Enter Todo' />
        <button onClick={handleClick}>Add Todo</button><br/><br/>
        {data.map((el) => (
            <div key={el.id} style={{padding: "5px",borderRadius: "5px", border: "1px solid gray", width: "200px", margin: "auto", marginBottom: "10px" }}>
                <div>{el.name}</div>
                <button onClick={() => { handleDelete(el.id) }}>Delete</button>
            </div>
        ))}
    </div>;
};

export default Todo;

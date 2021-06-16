import React from 'react'
import { useState } from 'react'

function ToDoForm({ addTask }) {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.currentTarget.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input 
                value={input}
                type="text"
                onChange={onChange}
                placeholder="Enter value..."
            />        
            <button>Save</button>
        </form>
    )
}

export default ToDoForm
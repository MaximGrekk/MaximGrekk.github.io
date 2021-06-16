import React from 'react'
function ToDo({ todo, toggleTask, deleteTask }) {
    return (
        <ul key={todo.id} className="item-todo">
            <li 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </li>
            <span className="item-delete" onClick={() => deleteTask(todo.id)}>
                &times;
            </span>
        </ul>
    )
}

export default ToDo
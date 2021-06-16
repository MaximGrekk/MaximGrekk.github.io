import React from 'react'
import { useState } from 'react'
import ToDo from './todolist/ToDoLi'
import ToDoForm from './todolist/ToDoForm'

const styles = {
  card: {
    border: "2px solid #ccc",
    width: "90%",
    margin: "0 auto",
    marginTop: "10%",
    marginBottom: "10%",
    paddingBottom: "1.5em",
    backgroundColor: "rgba(245, 245, 245, 0.5)",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.5)",
  }
}
function App() {
  const [todos, setTodos] = useState([])


  // add task
  const addTask = (input) => {
    if(input) {
      const newItem = {
        id: Math.random().toString(10).substr(0, 7),
        task: input,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }
  // delete task
  const deleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const toggleTask = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }

  return (
    <div className="App" style={styles.card}>
      <h1>Tasks: {todos.length}</h1>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            />
        )
      })}
    </div>
  );
}

export default App;
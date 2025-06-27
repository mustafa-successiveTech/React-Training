"use client"
import React, { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]); 
  const [newTask, setnewTask] = useState();

  const addTodo = () => {
     if (newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      task: newTask,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setnewTask("");
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <input 
        type="text" 
        placeholder="Add task" 
        value={newTask} 
        onChange={(e) => {
            setnewTask(e.target.value)
        }}
      />

      <button onClick={addTodo}>Add</button>

      {todos.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul 
            
            >
          {todos.map((todo) => (
            <li 
                key={todo.id}      
                style={{ padding: "10px" , margin: "20px"}}         
                >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none" , padding: "10px" , margin: "10px"
                }}
              >
                {todo.task}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;

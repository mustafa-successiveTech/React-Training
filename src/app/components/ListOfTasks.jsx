import { useState } from "react";
import button from "./button";


export default function ListOfTasks() {

    const [tasks, setTasks] = useState([
            { id: 1, title: "Learn React Basics", completed: false },
            { id: 2, title: "Practice useState and useEffect", completed: true },
            { id: 3, title: "Build a To-Do App", completed: false },
            { id: 4, title: "Study useReducer", completed: false },
            { id: 5, title: "Read about Context API", completed: true },    
        ]);

    const toggleTask = (id) => {
        setTasks(prev =>
            prev.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };


    return (
        <div>
        <h2>Task List</h2>
        {tasks.map(task => (
            <div key={task.id}>
            <input type="checkbox" checked={task.completed} readOnly />
            <span style={{ margin: '0 10px' }}>{task.title}</span>
            <button onClick={() => toggleTask(task.id)}>
                {task.completed ? 'Mark Incomplete' : 'Task Completed'}
            </button>
            </div>
        ))}
        </div>
  );
};
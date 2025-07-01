import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // to track editing
  const [editValue, setEditValue] = useState("");   // value being edited

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks(prev => [...prev, task]);
      setTask("");
    }
  };

  const handleUpdateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editValue;
    setTasks(updatedTasks);
    setEditIndex(null);      
    setEditValue("");
  };

  return (
   <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
    <h1 style={{ textAlign: "center" }}>Todo List</h1>

    <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((item, index) => (
            <li
                key={index}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    gap: "10px"
                }}
            >
            {editIndex === index ? (
                <>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        style={{ flex: 1 }}
                    />
                    <button onClick={handleUpdateTask}>Save</button>
                </>
            ) : (
                <>
                    <span style={{ flex: 1 }}>{item}</span>
                    <button
                        onClick={() => {
                            setEditIndex(index);
                            setEditValue(item);
                        }}
                    >
                    Update
                    </button>
                </>
            )}
            </li>
        ))}
        </ul>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <input
                type="text"
                value={task}
                placeholder="Enter new task"
                onChange={(e) => setTask(e.target.value)}
                style={{ flex: 1 }}
            />
            <button onClick={handleAddTask}>Add</button>
        </div>
   </div>
  );
}

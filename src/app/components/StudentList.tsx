import React, { useState, useMemo } from "react";

export default function StudentList() {
  const [students, setStudents] = useState<string[]>([
    "Aman",
    "Zoya",
    "Mustafa",
    "Priya",
  ]);
  const [newName, setNewName] = useState<string>("");

  const memoizedStudents = useMemo(() => {
    return [...students].sort();
  }, [students]);

  const addStudent = () => {
    if (newName.trim() !== "") {
      setStudents(prev => [...prev, newName.trim()]);
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {memoizedStudents.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter student name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

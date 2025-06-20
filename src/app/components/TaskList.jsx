export default function TaskList() {
    const tasks = ['Learn React', 'Write Code', 'Read Docs'];

    return (
        <div className="child">
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        
        </div>
    )
}
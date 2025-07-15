type TaskListProps = {
  taskNames: string[];
};

export default function TaskList({ taskNames }: TaskListProps) {
  return (
    <div className="child">
      <ul>
        {taskNames.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

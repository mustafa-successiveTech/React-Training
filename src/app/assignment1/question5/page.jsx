import TaskList from "@/app/components/TaskList";

export default function Question5({taskNames}) {
    return (
        <>
            <h3>5. Create a functional component named TaskList that accepts an array of task names as a prop.
                Use the map function to render each task name as a list item.
                Import and render the TaskList component in the App component with an array of tasks.
            </h3>
            <TaskList taskNames={taskNames}/>
        </>
    )
};
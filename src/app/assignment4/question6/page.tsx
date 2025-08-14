import TodoInputUpdate from "@/app/components/todoInputUpdate";

export default function Question6() {
  return (
    <div className="parent">
      <h3>
        6. Build a simple todo list component with a text input for adding new
        tasks and a list to display them. Use controlled components to handle
        the input and update the list of tasks.
      </h3>
      <TodoInputUpdate />
    </div>
  );
}

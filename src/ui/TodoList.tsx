import { useTodos } from "../context/useTodos";
import TodoItem from "./TodoItem";

function TodoList() {
  const { allTodos, filter } = useTodos();

  const filteredTodos =
    filter === "All"
      ? allTodos
      : filter === "Active"
        ? allTodos.filter((t) => !t.active)
        : allTodos.filter((t) => t.active);

  return (
    <div className="divide-dark-grayish-blue/30 scrollbar max-h-[25rem] divide-y-1 overflow-y-auto rounded-sm bg-inherit">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.goal + todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;

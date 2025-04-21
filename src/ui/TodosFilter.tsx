import { useTodos } from "../context/useTodos";
import Clear from "./Clear";
import Filter from "./Filter";

function TodosFilter() {
  const { allTodos, filter } = useTodos();

  const filteredTodos =
    filter === "All"
      ? allTodos
      : filter === "Active"
        ? allTodos.filter((t) => !t.active)
        : allTodos.filter((t) => t.active);

  return (
    <div className="border-t-dark-grayish-blue/30 text-very-dark-grayish-blue flex items-center justify-between border-t-1 px-5 py-3 text-sm">
      <span className="text-very-dark-grayish-blue/70">
        {filteredTodos.length > 0
          ? allTodos.length + " items left"
          : "No Todos for Now :("}
      </span>
      <Filter />
      <Clear />
    </div>
  );
}

export default TodosFilter;

import TodoList from "./TodoList";
import TodosFilter from "./TodosFilter";

function TodoContainer() {
  return (
    <div className="bg-very-light-gray shadow-very-dark-grayish-blue/20 flex w-full flex-col rounded-sm shadow-xl">
      <TodoList />
      <TodosFilter />
    </div>
  );
}

export default TodoContainer;

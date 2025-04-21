import { useState } from "react";
import { useTodos } from "../context/useTodos";

function CreateTodo() {
  const { setAllTodos } = useTodos();
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setAllTodos((t) => [
      ...t,
      { goal: value, active: false, id: new Date().toISOString() },
    ]);
    setValue("");
  }

  return (
    <div className="bg-very-light-gray shadow-very-dark-grayish-blue/20 flex items-center gap-4 rounded-sm px-5 shadow-lg">
      <div className="border-dark-grayish-blue/30 h-6 w-6 rounded-full border-1"></div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="placeholder:text-dark-grayish-blue/70 text-very-dark-grayish-blue w-full border-0 px-2 py-4 font-semibold outline-0 placeholder:font-semibold"
        />
      </form>
    </div>
  );
}

export default CreateTodo;

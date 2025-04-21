import { useTodos } from "../context/useTodos";

function Clear() {
  const { setAllTodos } = useTodos();
  return (
    <div>
      <button
        onClick={() => setAllTodos((t) => t.filter((tt) => !tt.active))}
        className="hover:text-very-very-dark-grayish-blue cursor-pointer font-semibold transition-all duration-300"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default Clear;

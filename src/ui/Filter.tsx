import { useTodos } from "../context/useTodos";

function Filter() {
  const { filter, setFilter } = useTodos();

  return (
    <div className="flex items-center justify-center gap-5">
      {filters.map((btn) => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={`${filter === btn ? "font-bold text-cyan-600 hover:text-cyan-700" : "hover:text-very-very-dark-grayish-blue font-semibold"} cursor-pointer transition-all duration-300`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

const filters = ["All", "Active", "Completed"];

export default Filter;

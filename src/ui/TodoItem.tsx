import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTodos } from "../context/useTodos";

interface todoType {
  goal: string;
  active: boolean;
  id: string;
}

function TodoItem({ todo }: { todo: todoType }) {
  const { goal, active, id } = todo;
  const [isHover, setIsHover] = useState(false);
  const { setAllTodos } = useTodos();

  function handleCheck() {
    setAllTodos((t) =>
      t.map((tt) =>
        tt.id === id && tt.goal === goal ? { ...tt, active: !active } : tt,
      ),
    );
  }

  function handleRemove() {
    setAllTodos((t) => t.filter((tt) => tt.id !== id));
  }

  if (!goal) return null;

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="flex cursor-pointer items-center justify-between px-5 py-4"
    >
      <div className="flex items-center gap-5">
        <button
          onClick={() => handleCheck()}
          className={`border-dark-grayish-blue/30 ${active ? "from-gradient-1 to-gradient-2 border-0 bg-gradient-to-br" : "border-1"} hover:border-l-gradient-1/60 hover:border-t-gradient-1/60 hover:border-b-gradient-2/60 hover:border-r-gradient-2/60 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full transition-all duration-300`}
        >
          {active && (
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
              <path
                fill="none"
                stroke="#FFF"
                stroke-width="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          )}
        </button>
        <h2
          className={`font-semibold ${active ? "text-dark-grayish-blue/40 line-through" : "text-very-dark-grayish-blue"}`}
        >
          {goal}
        </h2>
      </div>
      <AnimatePresence mode="wait">
        {isHover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <button
              onClick={handleRemove}
              className="flex cursor-pointer items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  fill="#494C6B"
                  fillRule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TodoItem;

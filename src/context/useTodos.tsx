/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface todoType {
  goal: string;
  active: boolean;
  id: string;
}

interface contextType {
  allTodos: todoType[];
  setAllTodos: Dispatch<SetStateAction<todoType[]>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const initialState = {
  allTodos: [],
  setAllTodos: () => {},
  filter: "All",
  setFilter: () => {},
};

const todosContext = createContext<contextType>(initialState);

function TodosProvider({ children }: { children: ReactNode }) {
  const [allTodos, setAllTodos] = useState(
    JSON.parse(localStorage.getItem("todos") || "[]") || initialState.allTodos,
  );
  const [filter, setFilter] = useState("All");

  useEffect(
    function () {
      localStorage.setItem("todos", JSON.stringify(allTodos));
    },
    [allTodos],
  );

  return (
    <todosContext.Provider value={{ allTodos, setAllTodos, filter, setFilter }}>
      {children}
    </todosContext.Provider>
  );
}

function useTodos() {
  const context = useContext(todosContext);
  if (context === undefined)
    throw new Error("Todos Context shouldn't be used here");
  return context;
}

export { useTodos, TodosProvider };

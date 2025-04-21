import AppFooter from "./ui/AppFooter";
import CreateTodo from "./ui/CreateTodo";
import Nav from "./ui/Nav";
import TodoContainer from "./ui/TodoContainer";

function App() {
  return (
    <div className="absolute top-[10%] right-[50%] flex w-[34rem] translate-x-[50%] flex-col gap-5">
      <Nav />
      <CreateTodo />
      <TodoContainer />
      <AppFooter />
    </div>
  );
}

export default App;

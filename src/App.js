import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filters/Filter";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div
      className="App"
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
        background: "#bfbfbf",
      }}
    >
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;

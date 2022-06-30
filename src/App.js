import { useId, useState } from "react";
import { Navbar } from "./components/NavBar";
import TodoList from "./components/TodoList";
import { v4 } from "uuid";
function App() {
    const primaryColor = "#4263eb";
    const [todoLists, setTodoList] = useState([
        {
            title: "this is a list",
            id: v4(),
        },
    ]);

    return (
        <div>
            <Navbar color={primaryColor}></Navbar>
            <TodoList color={primaryColor} todoList={todoLists[0]}></TodoList>
        </div>
    );
}

export default App;

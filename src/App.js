import { useState } from "react";
import { Navbar } from "./components/NavBar";
import TodoList from "./components/TodoList";
import { v4 } from "uuid";
import { Lists } from "./components/Lists";
function App() {
    const primaryColor = "#4263eb";
    const [todoLists, setTodoList] = useState([
        {
            title: "this is a list",
            id: v4(),
        },
    ]);

    const addNewList = () => {
        if (todoLists.length < 3)
            setTodoList((prev) => [
                ...prev,
                { title: "another list", id: v4() },
            ]);
    };

    return (
        <div>
            <Navbar color={primaryColor} onAddNewList={addNewList}></Navbar>
            <Lists>
                {todoLists.map((list) => (
                    <TodoList
                        key={list.id}
                        color={primaryColor}
                        todoList={list}
                    ></TodoList>
                ))}
            </Lists>
        </div>
    );
}

export default App;

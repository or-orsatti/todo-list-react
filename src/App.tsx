import React, { useState } from "react";
import { Navbar } from "./components/Layout/NavBar";
import TodoList from "./components/List/TodoList";
import TodoListClass from "./classes/ListClass";
import Lists from "./components/List/Lists";
function App() {
    const primaryColor = "#4263eb";
    const [todoLists, setTodoList] = useState([] as TodoListClass[]);

    const addNewList = (title: string) => {
        if (todoLists.length < 3)
            setTodoList((prev) => [...prev, new TodoListClass(title)]);
    };

    const staleList = (listId: string) => {
        const l = todoLists.find(
            (todoList) => todoList.id === listId
        ) as TodoListClass;
        l.stale();
    };

    return (
        <div>
            <Navbar color={primaryColor} addNewList={addNewList}></Navbar>
            <Lists>
                {todoLists.map((list) => (
                    <TodoList
                        key={list.id}
                        color={primaryColor}
                        todoList={list}
                        staleThisList={() => staleList(list.id)}
                    ></TodoList>
                ))}
            </Lists>
        </div>
    );
}

export default App;

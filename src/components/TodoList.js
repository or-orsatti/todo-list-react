import styled from "styled-components";
import Todo from "./Todo";
import { transparentize, darken } from "polished";
import { v4 } from "uuid";
import { useState } from "react";
const TodoListStyles = styled.div`
    width: 50rem;
    box-shadow: 0 0 5px 10px ${(props) => transparentize(0.8, props.color)};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    border-radius: 10px;

    h2 {
        font-size: 4rem;
        color: ${(props) => darken(0.5, props.color)};
        text-transform: capitalize;
        text-align: center;
    }

    ul {
        list-style-type: none;
        display: ${(props) => (props.len ? "flex" : "none")};
        flex-direction: column;
        gap: 1rem;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 3rem;
        letter-spacing: 1px;
        color: ${(props) => props.color};
        padding: 0.5em 1.5em;
        cursor: pointer;
        border-radius: 5px;
    }

    button:hover {
        background-color: #eef;
    }
`;

export default function TodoList(props) {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        todo = { ...todo, id: v4() };
        setTodos((prev) => [...prev, todo]);
    };

    const removeTodo = (id) => {
        setTodos((prev) => [...prev.filter((todo) => todo.id !== id)]);
    };

    return (
        <TodoListStyles color={props.color} len={todos.length}>
            <h2>{props.todoList.title}</h2>
            <ul>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        color={props.color}
                        title={todo.title}
                        onRemoveTodo={() => removeTodo(todo.id)}
                    />
                ))}
            </ul>
            <button onClick={() => addTodo({ title: "some todo" })}>
                + add a new task
            </button>
        </TodoListStyles>
    );
}

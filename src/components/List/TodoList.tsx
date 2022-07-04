import styled from "styled-components";
import Todo from "../Todo/Todo";
import { transparentize, darken } from "polished";
import { useState } from "react";
import { NewTodo } from "../Todo/NewTodo";
import { Button } from "../UI/Button";
import TodoClass from "../../classes/TodoClass";
import TodoListClass from "../../classes/ListClass";

type styledProps = {
    color: string;
    len: number;
};

type todoListProps = {
    color: string;
    todoList: TodoListClass;
    staleThisList: () => void;
};
const TodoListStyles = styled.div`
    width: 40rem;
    box-shadow: 0 0 5px 10px
        ${(props: styledProps) => transparentize(0.8, props.color)};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    border-radius: 10px;

    h2 {
        font-size: 2rem;
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
`;

export default function TodoList(props: todoListProps) {
    const [todos, setTodos] = useState([] as TodoClass[]);
    const [addTodo, setAddTodo] = useState(false);

    const removeTodo = (id: string) => {
        setTodos((prev) => [
            ...prev.filter((todo: TodoClass) => todo.id !== id),
        ]);
    };

    const onRevertNewTodo = (e: Event) => {
        setAddTodo(false);
    };

    const onAddTodo = (title: string) => {
        if (title === "") return;
        setTodos((prev) => [...prev, new TodoClass(title)]);
        setAddTodo(false);
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
            {addTodo ? (
                <NewTodo
                    addTodo={onAddTodo}
                    revertNewTodo={onRevertNewTodo}
                    color={props.color}
                ></NewTodo>
            ) : null}
            <Button
                secondary
                onClickHandler={() => setAddTodo(true)}
                color={props.color}
            >
                + add a new task
            </Button>
        </TodoListStyles>
    );
}

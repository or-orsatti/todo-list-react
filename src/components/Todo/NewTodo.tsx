import styled from "styled-components";
import { Button } from "../UI/Button";
import { useState, useRef, useEffect } from "react";
import Input from "../UI/Input";

import React from "react";

const NewTodoStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

type newTodoProps = {
    color: string;
    revertNewTodo: (e: Event) => void;
    addTodo: (title: string) => void;
};

export const NewTodo = (props: newTodoProps) => {
    const [newTodo, setNewTodo] = useState("");
    console.log(newTodo);

    const onClickAdd = (e: any) => {
        props.addTodo(newTodo);
        setNewTodo("");
    };

    const onKeypressEneterAdd = (e: any) => {
        if (e.key !== "Enter") {
            return;
        }

        props.addTodo(newTodo);
        setNewTodo("");
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    });

    return (
        <NewTodoStyles>
            <Input
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
                onKeyDown={onKeypressEneterAdd}
                ref={inputRef}
            ></Input>
            <Button primary color={props.color} onClickHandler={onClickAdd}>
                +
            </Button>
            <Button
                primary
                color={props.color}
                onClickHandler={props.revertNewTodo}
            >
                -
            </Button>
        </NewTodoStyles>
    );
};

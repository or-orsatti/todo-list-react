import styled from "styled-components";

const TodoStyles = styled.li`
    border: 2px solid ${(props) => props.color};
    padding: 1.5rem;
    border-radius: 5px;
    font-weight: 700;
    font-size: 2rem;
    color: ${(props) => props.color};
    cursor: pointer;
    &:hover {
        color: #fff;
        background-color: ${(props) => props.color};
    }
`;

export default function Todo(props) {
    return (
        <TodoStyles color={props.color} onClick={props.onRemoveTodo}>
            {props.title}
        </TodoStyles>
    );
}

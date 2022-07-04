import styled from "styled-components";

const TodoStyles = styled.li`
    border: 2px solid ${(props) => props.color};
    padding: 0.5em;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1.6rem;
    color: ${(props) => props.color};
    cursor: pointer;
    &:hover {
        color: #fff;
        background-color: ${(props) => props.color};
    }
`;

type todoProps = {
    color: string;
    onRemoveTodo: (e: any) => void;
    title: string;
};
export default function Todo(props: todoProps) {
    return (
        <TodoStyles color={props.color} onClick={props.onRemoveTodo}>
            {props.title}
        </TodoStyles>
    );
}

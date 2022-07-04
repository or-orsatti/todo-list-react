import styled from "styled-components";
const Input = styled.input`
    background-color: transparent;
    font-size: 1.6rem;
    border: none;
    width: 100%;
    padding: 0.25em 0.5em;
    border-radius: 5px;
    border: #eef 2px solid;
    &:focus {
        background-color: #eef;
        border: none;
        outline: none;
    }
`;

export default Input;

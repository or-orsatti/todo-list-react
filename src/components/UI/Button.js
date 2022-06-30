import styled from "styled-components";

export const Button = styled.button`
    padding: 0.5em 1.5em;
    background-color: transparent;
    border: #fff solid 2px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 700;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    &:hover {
        background-color: #fff;
        color: ${(props) => props.color};
    }
`;

import styled from "styled-components";
import { Button } from "./UI/Button";
import { Heading } from "./UI/Heading";
const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 8rem;
    gap: 1.5rem;
    padding-left: 3rem;
    justify-content: flex-start;
    width: 100%;
    background-color: ${(props) => props.color};
`;

export const Navbar = (props) => {
    return (
        <NavbarContainer color={props.color}>
            <Button color={props.color} onClick={() => props.onAddNewList()}>
                + Create a new list
            </Button>
            <Button
                color={props.color}
                onClick={() => console.log("clickeddd 2")}
            >
                - Collapse
            </Button>
        </NavbarContainer>
    );
};

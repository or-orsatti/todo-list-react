import styled from "styled-components";
import { Button } from "../UI/Button";
import { useState } from "react";
import NewList from "../List/NewList";
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

interface navbarProps {
    color: string;
    addNewList: (title: string) => void;
}

export const Navbar = (props: navbarProps) => {
    const [IsNewList, setIsNewList] = useState(false);
    return (
        <NavbarContainer color={props.color}>
            <Button
                color={props.color}
                onClickHandler={() => setIsNewList(true)}
            >
                + Create a new list
            </Button>
            {IsNewList ? (
                <NewList
                    addNewList={props.addNewList}
                    removeNewListState={() => setIsNewList(false)}
                />
            ) : null}
        </NavbarContainer>
    );
};

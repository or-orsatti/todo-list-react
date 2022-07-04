import { darken } from "polished";
import styled from "styled-components";

const RegularButton = styled.button`
    padding: 0.5em 1.5em;
    background-color: transparent;
    border: #fff solid 2px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 700;
    font-size: 1.6rem;
    border-radius: 5px;
    letter-spacing: 0.5px;
    &:hover {
        background-color: #fff;
        color: ${(props: { color: string }) => props.color};
    }
`;

const PrimaryButton = styled(RegularButton)`
    background-color: ${(props) => props.color};
    border: none;
    color: #fff;
    &:hover {
        background-color: ${(props) => darken(0.05, props.color)};
        color: #fff;
    }
`;

const SecondaryButton = styled(RegularButton)`
    border: none;
    color: ${(props) => props.color};
    &:hover {
        background-color: #eef;
    }
`;

type btnProps = {
    color: string;
    onClickHandler: (e: any) => void;
    primary?: Boolean;
    secondary?: Boolean;
    children: JSX.Element | string;
};
export const Button = (props: btnProps) => {
    if (props.primary) {
        return (
            <PrimaryButton color={props.color} onClick={props.onClickHandler}>
                {props.children}
            </PrimaryButton>
        );
    }

    if (props.secondary) {
        return (
            <SecondaryButton color={props.color} onClick={props.onClickHandler}>
                {props.children}
            </SecondaryButton>
        );
    }

    return (
        <RegularButton color={props.color} onClick={props.onClickHandler}>
            {props.children}
        </RegularButton>
    );
};

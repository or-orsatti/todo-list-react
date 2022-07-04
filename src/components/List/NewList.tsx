import { useEffect, useRef, useState } from "react";
import Input from "../UI/Input";

type newListProps = {
    addNewList: (title: string) => void;
    removeNewListState: () => void;
};
export default function NewList(props: newListProps) {
    const [title, setTitle] = useState("");

    const setListTitleHandler = (e: any) => {
        if (e.key !== "Enter") return;
        if (title === "") return;
        props.addNewList(title);
        props.removeNewListState();
        setTitle("");
    };

    const focusInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (focusInput.current) focusInput.current.focus();
    });
    const changeTitleHandler = (e: any) => {
        setTitle(e.target.value);
    };
    return (
        <div>
            <Input
                type="text"
                onChange={changeTitleHandler}
                onKeyDown={setListTitleHandler}
                value={title}
                ref={focusInput}
            />
        </div>
    );
}

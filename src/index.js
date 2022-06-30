import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "./App";
const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
    line-height: 1.6;
}
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
        <GlobalStyles />
        <App />
    </React.Fragment>
);

/**
 * TODO: Todo app:
 *
 * Stack: React--styled-components--mobx
 *
 * features:
 * 1. add new lists (up to 5 lists)
 * 2. add new todos inside a list with a button in the buttom on of the list.
 * 3. click on a todo to mark as done - will remove it.
 * 4. edit todo - click on a pen icon will let you edit the todo.
 * 5. collapse all lists will stack them on each other.
 * 6. delete a list by clicking on a trashcan icon inside the list.
 */

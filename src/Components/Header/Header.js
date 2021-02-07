import React from "react";
import "./Header.css"

export default () => (
    <>
    <header>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/users">Test</a>
            </li>
            <li>
                <a href="/add-user">add-user</a>
            </li>
            <li>
                <a href="/edit-user">edit-user</a>
            </li>
        </ul>
    </header>
    </>
);
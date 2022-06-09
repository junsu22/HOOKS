import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
};

const App = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <div className="App">
            <button onClick={enablePrevent}>protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onclick) => {
    if (typeof onClick !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onclick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onclick);
            }
        };
    }, []);
    return element;
};

const App = () => {
    const sayHello = () => console.log("say Hello");
    const title = useClick(sayHello);
    return (
        <div className="App">
            <h1 ref={title}>Hi</h1>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

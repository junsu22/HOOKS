import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen();
            if (callback && typeof callback === "function") {
                callback(true);
            }
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if (callback && typeof callback === "function") {
            callback(false);
        }
    };
    return { element, triggerFull, exitFull };
};
const App = () => {
    const onFulls = (isFull) => {
        console.log(isFull ? "We are full" : "we are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen();
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <div ref={element}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Ultraviolet_image_of_the_Cygnus_Loop_Nebula_crop.jpg" />
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

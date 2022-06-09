import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("Offline", handleChange);
        };
    }, []);
    return status;
};
const App = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "we are offline ");
    };
    const online = useNetwork(handleNetworkChange);
    return (
        <div className="App">
            <h1>{online ? "online" : "offline"}</h1>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(progress + 0.1);
            if (progress >= 100) {
                clearInterval(intervalId);
                onLoadingComplete();
            }
        }, 1);
        return () => clearInterval(intervalId);
    }, [progress, onLoadingComplete]);

    return (
        <div className="loading-screen">
            <img
                className="loading-logo"
                src={require("../img/logo512.png")}
                alt="Loading logo"
                style={{transform:`rotate(${(progress/60)*360}deg)`}}
            />
            <div className="percentage-counter">{(progress).toFixed(0)}%</div>
        </div>
    );
};

export default LoadingScreen;

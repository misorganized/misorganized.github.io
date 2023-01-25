import React from "react";
import {Link} from 'react-router-dom';
import "./LandingPage.css";
const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="top-bar">
                <h1>Welcome to our landing page</h1>
            </div>
            <div className="grid-container">
                <Link to="/about" className="grid-item">About</Link>
                <a href="https://www.github.com/misorganized" target="_blank"
                   className="grid-item" rel="noreferrer">Organization</a>
                <Link to="/datasets" className="grid-item">Datasets</Link>
                <Link to="/model" className="grid-item">Models</Link>
            </div>
            <div className="introduction">
                <h1>Animated introduction</h1>
                <p>Add some filler text here</p>
            </div>
        </div>
    );
};

export default LandingPage;

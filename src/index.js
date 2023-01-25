import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import About from "./Components/About/About";
import Model from "./Components/Model/Model";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <App style={{display: 'block'}}/>
                }/>
                <Route path="/about" element={
                    <About />
                } />
                <Route path="/model" element={
                    <Model />
                } />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals(console.log);

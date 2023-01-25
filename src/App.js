import { useEffect, useState } from 'react';
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import "./App.css";
import Home from "./Components/Home/LandingPage";
import Footer from './Components/Footer/Footer';

const App = () => {
    const [progress, setProgress] = useState(0);
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        window.onload = () => {
            setIsLoadingComplete(true);
        }
    }, []);

    useEffect(() => {
        if (!isLoadingComplete) {
            const intervalId = setInterval(() => {
                setProgress(progress + 1);
                if (progress >= 100) {
                    clearInterval(intervalId);
                }
            }, 10);
            return () => clearInterval(intervalId);
        }
    }, [isLoadingComplete, progress]);

    const handleLoadingComplete = () => {
        setIsLoadingComplete(true);
    }

    return (
        <div className="app">
            {!isLoadingComplete && <LoadingScreen onLoadingComplete={handleLoadingComplete}/>}
            {isLoadingComplete && <Home />}
            <Footer />
        </div>
    );
};

export default App;

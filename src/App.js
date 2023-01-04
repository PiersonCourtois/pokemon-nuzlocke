import React from 'react';
import Run from './components/Run';
import ReactGA from "react-ga4";
import Levels from './components/Levels';
import { userData } from "./user-data";
import './styles.css';

const App = () => {
    ReactGA.initialize("G-8SCM7E14SG");
    ReactGA.send("pageview");
    // Initializes userData if first time entering page
    if (localStorage.getItem('userData') === null) {
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    
    return (
        <>
         <Run />
         <Levels />
        </>
    );
}

export default App;
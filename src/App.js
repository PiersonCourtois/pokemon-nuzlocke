import React from 'react';
import Run from './components/Run';
import Levels from './components/Levels';
import { userData } from "./user-data";
import './styles.css';

const App = () => {
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
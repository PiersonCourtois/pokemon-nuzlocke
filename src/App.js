import React from 'react';
import { useState } from 'react';
import Run from './components/Run';
import Reset from './components/Reset';
import { gameData } from './area-data.js';
import { userData } from "./user-data";

const App = () => {
    if (localStorage.getItem('userData') === null) {
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    
    return (
        <>
         <Reset />
         <Run />
        </>
    );
}

export default App;
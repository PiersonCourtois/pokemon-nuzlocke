import React from 'react';
import Run from './components/Run';
import Reset from './components/Reset';
import { userData } from "./user-data";

const App = () => {
    // Initializes userData if first time entering page
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
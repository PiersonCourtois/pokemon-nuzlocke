import React from 'react';
import Run from './components/Run';

import { userData } from "./user-data";

const App = () => {
    // Initializes userData if first time entering page
    if (localStorage.getItem('userData') === null) {
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    
    return (
        <>
         <Run />
        </>
    );
}

export default App;
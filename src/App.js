import React from 'react';
import { useState } from 'react';
import Run from './components/Run'

const App = () => {
    const [game, setGame] = useState('');
    

    return (
        <>
        {/* Default state is no game selected, so render game option buttons */}
            {(game === '') && (
                <>
                    <button onClick={() => setGame('scarlet')}>Scarlet</button>
                    <button onClick={() => setGame('violet')}>Violet</button>
                </>
            )}
            {/* When game is selected, render run for that game */}
            {(game !== '') && 
                (
                <>
                    <button onClick={() => setGame('')}>Back</button>
                    <Run gameType = {game}/>
                </>
                )
            }   
        </>
    );
}

export default App;
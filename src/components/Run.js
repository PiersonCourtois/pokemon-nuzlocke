import React from 'react';
import { gameDataScarlet } from '../json-data/area-data/area-scarlet.js';
import { gameDataViolet } from '../json-data/area-data/area-violet.js';

const Run = props => {
    /* Sets game data to the data passed. Should change later if support for more games is added */
    const gameData = (props.gameType === 'violet') ? gameDataViolet : gameDataScarlet;
    
    return(

        <div className='run-container'>
            <h1>Run</h1>
            <div className='area-container'>
                {gameData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Run;

import React from 'react';
import Area from './Area';
import { useState } from 'react';
import { gameData } from '../area-data.js';
import { userData } from "../user-data";

const Run = () => {
    const [area, setArea] = useState(0);
    const game = gameData;
    return(

        <div className='run-container'>
            <h1>Run</h1>
            
            
            <div className='area-container'>
                {game.map((data, key) => {
                    return (
                        <div key={key}>
                            <button onClick={() => setArea(key)}>{data.name}</button>
                        </div>
                    );
                })}
            </div>
            <div className='roll-container'>
                <Area currentArea = {area}/>
            </div>
        </div>
    );
}

export function setLocal(key, i, str) {
    var tempData = JSON.parse(localStorage.getItem('userData'));
    tempData[i][key] = str;
    localStorage.setItem('userData', JSON.stringify(tempData));
}

export function getLocal(key, i) {
    var tempData = JSON.parse(localStorage.getItem('userData'));
    return JSON.stringify(tempData[i][key]);
}

export function genPokemon(i) {
    let list = gameData[i]["encounters-scarlet"];
    return list[Math.floor(Math.random() * list.length)];
  }

export default Run;
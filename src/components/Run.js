
import React from 'react';
import Area from './Area';
import { useState } from 'react';
import { gameData } from '../area-data.js';

const Run = () => {
    const [area, setArea] = useState(0);
    const game = gameData;
    return(

        <div className='run-container'>
            <div className='header'>
                <img src={require('../type-imgs/icon512.png')} alt='' width={100}/>
                <h1>NuzRun</h1>
            </div>
            <div className='area-container'>
                {game.map((data, key) => {
                    return (
                        <div className ="area" key={key}>
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
    // Function to set a data item to local storage. Takes in key, index, and a string to set. 
    var tempData = JSON.parse(localStorage.getItem('userData'));
    tempData[i][key] = str;
    localStorage.setItem('userData', JSON.stringify(tempData));
}

export function getLocal(key, i) {
    // Function to get a data item from local storage. Takes in key and index. Returns data item at [index][key]
    var tempData = JSON.parse(localStorage.getItem('userData'));
    return JSON.stringify(tempData[i][key]);
}

export function genPokemon(i, condition, dupes) {
    // Function to generate a random pokemon from a given list. Takes in index of list. Sets pokemon generated to local storage then returns that generated pokemon
    let list = gameData[i][condition];
    let poke = list[Math.floor(Math.random() * list.length)];
    console.log(dupes);
    if(!dupes) 
        while(isDupe(poke)) 
            poke = list[Math.floor(Math.random() * list.length)]; 
    
    setLocal("pokemonChosen", i, poke);
    setLocal("isChosen", i, "true");
    return poke;
  }

export function isDupe(pokemon) {
    for(let i = 0; i < 30; i++) {
        let temp = JSON.parse(getLocal("pokemonChosen", i));
        if(temp === pokemon)
            return true;
    }
    return false;
}

export default Run;
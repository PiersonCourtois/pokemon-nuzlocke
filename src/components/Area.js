import React from "react";
import { useState, useEffect } from "react";
import { getLocal, genPokemon } from "./Run";
import { userData } from "../user-data";
import { gameData } from '../area-data.js';

const Area = props => {
  const areaKeys = Object.keys(gameData[props.currentArea]).length;
  const [condition, setCondition] = useState("encounters-scarlet");
  const [night, setNight] = useState(false);
  const [pokemon, setPokemon] = useState(JSON.parse(getLocal("pokemonChosen", props.currentArea)));
  const changeNight = () => {
    setNight(!night);
  };
  const changeCondition = e => {
    setCondition(e.target.value);
  };
  const changePokemon = e => {
    setPokemon(e);
  }
  useEffect(() => {
    changePokemon(JSON.parse(getLocal("pokemonChosen", props.currentArea)));
  });

  const resetRun = () => {
  // Function to reset the current data by clearing the data stored in local storage. 
    if(window.confirm("Are you sure you want to reset this run?")) {
      localStorage.setItem('userData', JSON.stringify(userData));
      changePokemon(JSON.parse(getLocal("pokemonChosen", props.currentArea)));
    }
  }

  console.log(props.currentArea);  

  return(
    <>
      <h1>{JSON.parse(getLocal("isChosen", props.currentArea)) === "false" ? "Press Roll to roll a Pokemon" : pokemon}</h1>
      {/* On button click, returns string condition (scarlet or violet) plus -night appended to it if night is checked */}
      <button onClick={() => changePokemon(genPokemon(props.currentArea, condition + (night ? '-night' : '')))}>Roll</button>
      <button onClick={() => resetRun()}>Reset</button>
      <div className="condition-options">
        {/* Scarlet radio button */}
        <label>
          <input 
            type="radio"
            name="condition"
            value="encounters-scarlet"
            id="scarlet"
            checked={condition === "encounters-scarlet"}
            onChange={changeCondition}
          />
          Scarlet
        </label>

        {/* Violet radio button */}
        <label>
          <input 
            type="radio"
            name="condition"
            value="encounters-violet"
            id="violet"
            checked={condition === "encounters-violet"}
            onChange={changeCondition}
          />
          Violet
        </label>

        {/* Allow night pokemon checkbox*/}
        <label>
          <input 
            type="checkbox"
            checked={night}
            onChange={changeNight}
            disabled = {areaKeys < 4}
          />
          Allow Night Pokemon?
        </label>
      </div>
    </>
  );
}

export default Area;
import React from "react";
import { useState } from "react";
import { getLocal, genPokemon } from "./Run";
import { gameData } from '../area-data.js';

const Area = props => {
  const areaKeys = Object.keys(gameData[props.currentArea]).length;
  const [condition, setCondition] = useState("encounters-scarlet");
  const [night, setNight] = useState(false);
  const [pokemon, setPokemon] = useState(getLocal(1, props.currentArea));
  const changeNight = () => {
    setNight(!night);
  };
  const changeCondition = e => {
    setCondition(e.target.value);
  };

  return(
    <>
      <h1>{pokemon}</h1>
      {/* On button click, returns string condition (scarlet or violet) plus -night appended to it if night is checked */}
      <button onClick={() => setPokemon(genPokemon(props.currentArea, condition + (night ? '-night' : '')))}>Roll</button>

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
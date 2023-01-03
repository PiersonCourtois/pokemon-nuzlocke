import React from "react";
import { useState, useEffect } from "react";
import { getLocal, genPokemon } from "./Run";
import { userData } from "../user-data";
import { gameData } from '../area-data.js';

const Area = props => {
  const areaKeys = Object.keys(gameData[props.currentArea]).length;
  const [dupes, setDupes] = useState(false);
  const [condition, setCondition] = useState("encounters-scarlet");
  const [night, setNight] = useState(false);
  const [skip, setSkip] = useState(false);
  const [pokemon, setPokemon] = useState(JSON.parse(getLocal("pokemonChosen", props.currentArea)));
  // Dupes handler
  const changeDupes = () => {
    setDupes(!dupes);
  }
  // Night handler
  const changeNight = () => {
    setNight(!night);
  };
  // Condition handler
  const changeCondition = e => {
    setCondition(e.target.value);
  };
  // Pokemon handler
  const changePokemon = e => {
    setPokemon(e);
  }
  // Skip hanlder
  const changeSkip = () => {
    setSkip(!skip);
  }
  // <h1> element for pokemon would not rerender after selecting new area, this fixed it
  useEffect(() => {
    changePokemon(JSON.parse(getLocal("pokemonChosen", props.currentArea)));
  });

  const resetRun = () => {
  // Function to reset the current data by overwriting the data stored in local storage. 
    if(window.confirm("Are you sure you want to reset this run?")) {
      localStorage.setItem('userData', JSON.stringify(userData));
      changePokemon(JSON.parse(getLocal("pokemonChosen", props.currentArea)));
    }
  } 
  // Recursive function for a roll animation
  function rollAnimation(timer) {
    if(timer > 200)
      return;
    setTimeout(function () {changePokemon(genPokemon(props.currentArea, condition + (areaKeys > 4 ? '-night' : ''), dupes)); 
      rollAnimation(timer += 5.5);
      console.log(timer);
    }, timer);
  }

  return(
    <>
      {/* <h1> and img element displaying current Pokemon, or default message if none rolled */}
      <h1>{JSON.parse(getLocal("isChosen", props.currentArea)) === "false" ? "Press Roll to roll a Pokemon" : pokemon}</h1>
      <img src={require("../poke-imgs/pokemon_" + pokemon + ".png")} alt='did not load' />
      {/* On button click, returns string condition (scarlet or violet) plus -night appended to it if night is checked */}
      <button onClick={() => rollAnimation(0)}>Animation test</button>
      <button onClick={() => skip ? changePokemon(genPokemon(props.currentArea, condition + (areaKeys > 4 ? '-night' : ''), dupes)) : rollAnimation(0)}>Roll</button>
      {/* Reset run button */}
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

        {/* Allow dupes checkbox */}
        <label>
          <input 
            type="checkbox"
            checked={dupes}
            onChange={changeDupes}
          />
          Allow Duplicates?
        </label>

        {/* Skip Animation */}
        <label>
          <input 
            type="checkbox"
            checked={skip}
            onChange={changeSkip}
          />
          Skip Animation
        </label>
      </div>
    </>
  );
}

export default Area;
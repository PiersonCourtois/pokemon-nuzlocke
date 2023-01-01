import React from "react";
import { useState } from "react";
import { getLocal, genPokemon } from "./Run";

const Area = props => {
  const [pokemon, setPokemon] = useState(getLocal(1, props.currentArea));
  return(
    <>
      <h1>{pokemon}</h1>
      <button onClick={() => setPokemon(genPokemon(props.currentArea))}>Roll</button>
    </>
  );
}

export default Area;
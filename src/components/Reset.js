import React from "react";
import { gameData } from "../area-data";
import { userData } from "../user-data";

const Reset = () => {
  return (<button onClick={() => resetRun()}>Reset</button>);
}

function resetRun() {
  window.localStorage.clear();
  localStorage.setItem('userData', JSON.stringify(gameData));
}

export default Reset;
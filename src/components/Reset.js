import React from "react";
import { userData } from "../user-data";

const Reset = () => {
  return (<button onClick={() => resetRun()}>Reset</button>);
}

function resetRun() {
  // Function to reset the current data by clearing the data stored in local storage. 
  // TODO- Make it so that page re-renders on reset.
  window.localStorage.clear();
  localStorage.setItem('userData', JSON.stringify(userData));
}

export default Reset;
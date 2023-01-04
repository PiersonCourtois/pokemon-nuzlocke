import React from "react";
import { levelData } from "../level-data";
import '../scroll.css';

const Levels = () => {
  const level = levelData;
  return (
    <div className="level-cap-container">
      <div className='level-container'>
        {level.map((data, key) => {
          return (
            <div className="level" key={key}>
              <img src={require("../type-imgs/" + data.img)} alt='' width={50}/>
              <p >{data.name}</p>
              <p>{data.level}</p>
            </div>
          );
        })}
        </div>
    </div>
  );
}

export default Levels;
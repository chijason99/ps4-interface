import React from "react";
import { useContext } from "react";
import { GameContext } from "../App";
export default function GameInfo({ name, active, pic, id }) {
  const {getGameId} = useContext(GameContext)
  if(active){
    getGameId(id)
  }
  return (
    <li className={`game-info-container ${active ? "active" : ""}`}>
      <div className="image-container">
        <img src={pic} alt={`picture of the game${name}`} />
      </div>
      {active && (
        <div className="start-container">
          <span className="start">Start</span>
        </div>
      )}
    </li>
  );
}

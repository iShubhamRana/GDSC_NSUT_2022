import React from "react";
import "./feed.css";

function FCard({ lol }) {
  return (
    <div className="card-container">
      <img src={lol} alt="sus"></img>
      <div className="overlay"> </div>
    </div>
  );
}

export default FCard;

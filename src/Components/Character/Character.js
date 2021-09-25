import React from "react";
import "./character.css";

const Character = (props) => {
  const { character } = props;
  const { name, img, universe, powerLevel, points } = character;
  return (
    <div className="character-card text-whitish">
      <img className="mx-auto mb-3" src={img} alt="not" />
      <h6>Name: {name}</h6>
      <h6>From: {universe} Universe</h6>
      <h6>Power Level: {powerLevel}+</h6>
      <h6>Point: {points}</h6>
      <div className="btn" />
      <button className="btn btn-danger text-capitalize text-whitish">
        add to team
      </button>
    </div>
  );
};

export default Character;

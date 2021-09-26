import React from "react";
import "./character.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Character = (props) => {
  const element = <FontAwesomeIcon icon={faUserPlus} />;
  const fullStar = <FontAwesomeIcon icon={faStar} />;
  const { character, handleAddMember } = props;
  const { name, img, universe, powerLevel, points, rating, disable } =
    character;
  return (
    <div className="character-card">
      <img className="mx-auto mb-3" src={img} alt="not" />
      <table className="table text-whitish">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Universe</td>
            <td>{universe}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>
              <Rating
                emptySymbol="far fa-star"
                fullSymbol={fullStar}
                initialRating={rating}
                readonly
              />
            </td>
          </tr>
          <tr>
            <td className="min-width">Power Level</td>
            <td>{powerLevel}</td>
          </tr>
          <tr>
            <td>Points</td>
            <td>{points}</td>
          </tr>
        </tbody>
      </table>
      <div className="btn" />
      <button
        disabled={disable}
        onClick={() => handleAddMember(character)}
        className="btn btn-danger text-capitalize text-whitish"
      >
        {element} add to team
      </button>
    </div>
  );
};

export default Character;

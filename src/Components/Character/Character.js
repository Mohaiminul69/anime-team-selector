import React from "react";
import "./character.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Character = (props) => {
  const addMemberIcon = <FontAwesomeIcon icon={faUserPlus} />;
  const fullStar = <FontAwesomeIcon icon={faStar} />;
  /*
<------------------ Destructuring Character From Props ------------------>
*/
  const { character, handleAddMember } = props;
  /*
<---------------- Destructuring Properties From Character ---------------->
*/
  const { name, img, universe, powerLevel, points, rating, disable } =
    character;
  return (
    <div className="character-card">
      <img className="mx-auto mb-1" src={img} alt="not" />
      <table className="table text-whitish fw-bold">
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Universe:</td>
            <td>{universe}</td>
          </tr>
          <tr>
            <td>Rating:</td>
            <td className="text-warning">
              <Rating
                emptySymbol="far fa-star"
                fullSymbol={fullStar}
                initialRating={rating}
                readonly
              />
            </td>
          </tr>
          <tr>
            <td className="custom-width">Power Level:</td>
            <td>{powerLevel}+</td>
          </tr>
          <tr>
            <td>Points:</td>
            <td>{points} M</td>
          </tr>
        </tbody>
      </table>
      <div className="btn" />
      <button
        disabled={disable}
        onClick={() => handleAddMember(character)}
        className="btn btn-danger text-capitalize text-whitish"
      >
        {addMemberIcon} add to team
      </button>
    </div>
  );
};

export default Character;

import React from "react";
import "./cart.css";

const Cart = (props) => {
  const { teamMember } = props;
  const totalCost = teamMember.reduce(
    (previousMember, currentMember) => previousMember + currentMember.points,
    0
  );
  return (
    <div className="cart">
      <h1 className="mb-2 text-danger">My Team</h1>
      <hr />
      <h5>
        Members Added: <span className="text-danger">{teamMember.length}</span>
      </h5>
      <h5 className="mb-4">
        Total Cost:{" "}
        <span className="text-danger">{totalCost.toFixed(1)} M</span> points
      </h5>
      <hr />
      <h4 className="text-danger">Team Members List:</h4>
      {teamMember.map((member) => (
        <h5 key={member.key} className="added-members">
          {teamMember.indexOf(member) + 1}# <img src={member.img} alt="" />{" "}
          {member.name}
        </h5>
      ))}
    </div>
  );
};

export default Cart;

import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header p-5">
      <h1 className="text-danger">Make an Anime Team</h1>
      <h5 className="text-danger mt-2">
        The world is about to end, and all the American Superheros are busy, so
        we need to rely on japanese animes.
      </h5>
      <h3 className="text-danger">Total Budget: 400 Billion</h3>
    </div>
  );
};

export default Header;

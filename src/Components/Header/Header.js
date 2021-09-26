import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header p-5">
      <h1 className="text-blue">
        Make an <span className="text-danger">"Anime Team"</span> to save the
        world.
      </h1>
      <h5 className="text-blue mt-2">
        The world is about to end, and all the American Superheros are busy, so
        we need to rely on japanese animes.
      </h5>
      <h3 className="text-blue">Total Budget: 100 Million</h3>
    </div>
  );
};

export default Header;

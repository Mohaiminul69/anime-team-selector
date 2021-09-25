import React, { useEffect, useState } from "react";
import Character from "../Character/Character";
import "./dashboard.css";

const Dashboard = () => {
  const [characters, setcharacters] = useState([]);
  useEffect(() => {
    // fetch("https://mohaiminul69.github.io/anime-json/anime.JSON")
    fetch("./anime.JSON")
      .then((res) => res.json())
      .then((data) => setcharacters(data));
  }, []);
  return (
    <div className="bg-dark-blue">
      <div className="container py-4">
        <div className="row">
          <div className="col-8 grid">
            {characters.map((character) => (
              <Character key={character.key} character={character} />
            ))}
          </div>
          <div className="col-4">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

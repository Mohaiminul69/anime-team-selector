import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Character from "../Character/Character";
import "./dashboard.css";

const Dashboard = () => {
  const [characters, setcharacters] = useState([]);
  const [teamMember, setTeamMember] = useState([]);
  /*
<---------------- Fetching Data from JSON file by useEffect ---------------->
*/
  useEffect(() => {
    fetch("./anime.JSON")
      .then((res) => res.json())
      .then((data) => setcharacters(data));
  }, []);
  const handleAddMember = (member) => {
    member.disable = !member.disable;
    const newMember = [...teamMember, member];
    setTeamMember(newMember);
  };
  return (
    <div className="bg-dark-blue">
      <div className="container py-4">
        <div className="row">
          <div className="col-9 grid">
            {characters.map((character) => (
              <Character
                key={character.key}
                character={character}
                handleAddMember={handleAddMember}
              />
            ))}
          </div>
          <div className="col-3">
            <Cart teamMember={teamMember} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

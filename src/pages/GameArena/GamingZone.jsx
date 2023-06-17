import React from "react";
import "../../styles/gamingzone.scss";
import { useState } from "react";
import Billiards from "./Billiards";
import Foosball from "./Foosball/foosball";

const GamingZone = () => {
  const [gameTabs, setGameTabs] = useState({
    billiards: true,
    foosball: false,
  });
  const switchGameTabs = (event) => {
    switch (event.target.name) {
      case "billiards":
        setGameTabs({ billiards: true, foosball: false });
        break;
      case "foosball":
        setGameTabs({ billiards: false, foosball: true });
        break;
    }
  };
  return (
    <div className="gaming-zone">
      <div className="game-tabs">
        <button
          className={gameTabs.billiards ? "billiards" : "billiards-off"}
          billiards
          name="billiards"
          onClick={switchGameTabs}
        />
        <button
          className={gameTabs.foosball ? "foosball" : "foosball-off"}
          name="foosball"
          onClick={switchGameTabs}
        />
      </div>
      {gameTabs.billiards ? <Billiards /> : <Foosball />}
    </div>
  );
};

export default GamingZone;

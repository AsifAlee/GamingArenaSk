import React from "react";
import "../styles/tab-button.scss";

const TabButton = ({ bgImg, isActive, changeLeaderBrdTabs, name }) => {
  return (
    <button
      className={`tab-button ${!isActive && "blackNWhite"}`}
      style={{ backgroundImage: `url(${bgImg})` }}
      onClick={() => changeLeaderBrdTabs(name)}
    ></button>
  );
};

export default TabButton;

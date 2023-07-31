import React from "react";
import "../styles/leaderboard-item-with-rewards.scss";

const LeaderBoardItemReward = ({ days, rewImg, desc, isClawCrane }) => {
  return (
    <div className="leaderboarditem-rewards">
      <div
        className={isClawCrane === false ? "bg-image" : "claw-crane-bg-image"}
      >
        <img src={rewImg} />
      </div>
      <span className={isClawCrane ? "claw-days" : "days"}>
        {desc === "Beans"
          ? `${days}`
          : desc === "gems"
          ? `${days}`
          : `${days > 1 ? `${days} days` : `${days} day`}`}
      </span>
    </div>
  );
};

export default LeaderBoardItemReward;

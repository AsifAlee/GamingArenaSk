import React from "react";
import "../styles/leaderboard-item-with-rewards.scss";

const LeaderBoardItemReward = ({ days, rewImg, desc }) => {
  console.log("descriptions:", desc);
  return (
    <div className="leaderboarditem-rewards">
      <div className="bg-image">
        <img src={rewImg} />
      </div>
      <span className="days">
        {desc === "Beans"
          ? `${days} Beans`
          : desc === "gems"
          ? `${days} gems`
          : `${days > 1 ? `${days} days` : `${days} day`}`}
      </span>
    </div>
  );
};

export default LeaderBoardItemReward;

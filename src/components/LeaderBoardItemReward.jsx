import React from "react";
import "../styles/leaderboard-item-with-rewards.scss";

const LeaderBoardItemReward = ({ days, rewImg }) => {
  return (
    <div className="leaderboarditem-rewards">
      <div className="bg-image">
        <img src={rewImg} />
      </div>
      {days}
    </div>
  );
};

export default LeaderBoardItemReward;

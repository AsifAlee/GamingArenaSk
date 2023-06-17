import React from "react";
import Topper from "../../../components/Topper";
import LeaderBoardItem from "../../../components/LeaderBoardItem";

import { useState } from "react";

const LeaderBoard = ({ data }) => {
  const [isSeeMore, setIsMore] = useState(false);
  return (
    <div className="leader-board-main-sec">
      <div className="topRank">
        <div className="top1">
          <Topper index={0} user={data[0]} />
        </div>
        <div className="top2">
          <Topper notFirstRank={true} index={1} user={data[1]} />
        </div>
        <div className="top3">
          <Topper notFirstRank={true} index={2} user={data[2]} />
        </div>
      </div>
      <div className="restWinners">
        {data.slice(3, isSeeMore ? 10 : 20).map((user, index) => (
          <LeaderBoardItem index={index + 4} user={user} />
        ))}
      </div>
      <button
        className={isSeeMore ? "see-more" : "see-less"}
        onClick={() => setIsMore((prevState) => !prevState)}
      />
    </div>
  );
};

export default LeaderBoard;

import React from "react";
import Topper from "../../../components/Topper";
import LeaderBoardItem from "../../../components/LeaderBoardItem";

import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../../MyContext";
import { testData } from "../../../testData";

const LeaderBoard = ({ data }) => {
  // data = testData;

  const [isSeeMore, setIsMore] = useState(false);
  return (
    <div className="leader-board-main-sec">
      {data?.length > 0 ? (
        <>
          {" "}
          <div className="topRank">
            <div className="top1">
              {data[0] && <Topper index={0} user={data[0]} />}
            </div>
            <div className="top2">
              {data[1] && (
                <Topper notFirstRank={true} index={1} user={data[1]} />
              )}
            </div>
            <div className="top3">
              {data[2] && (
                <Topper notFirstRank={true} index={2} user={data[2]} />
              )}
            </div>
          </div>
          <div className="restWinners">
            {data.slice(3, isSeeMore ? 10 : 20).map((user, index) => (
              <LeaderBoardItem index={index + 4} user={user} />
            ))}
          </div>
          {data.slice(3).length && (
            <button
              className={isSeeMore ? "see-more" : "see-less"}
              onClick={() => setIsMore((prevState) => !prevState)}
            />
          )}
        </>
      ) : (
        <div className="noData">No Data Found</div>
      )}
    </div>
  );
};

export default LeaderBoard;

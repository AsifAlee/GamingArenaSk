import React, { useEffect, useState } from "react";
import unknown from "../assets/images/unknown-user.png";
import level from "../assets/images/level.PNG";
import ballIcon from "../assets/images/ball-potted-icon.png";
import gemIcon from "../assets/images/gems.png";
import clawPoint from "../assets/images/claw-crane/claw-point-icon.png";
import "../styles/leader-board-item.scss";
import { getLevelImage, getRewardsImage, gotoProfile } from "../functions";
import "../styles/leaderboard-item-with-rewards.scss";
import LeaderBoardItemReward from "./LeaderBoardItemReward";
import LeaderBoardSlider from "./LeaderBoardSlider";

const LeaderBoardItemWthRewards = ({
  user,
  index,
  isClawCrane,
  isTalent,
  iconImg,
  isWheel,
}) => {
  // const [rewards, setCurrentReward] = useState(JSON.parse(user.desc));
  const [formatedReward, setFormatedReward] = useState([]);

  const formatData = (originalArray) => {
    const newArray = [];
    for (let i = 0; i < originalArray?.length; i += 3) {
      newArray?.push(originalArray?.slice(i, i + 3));
    }
    return newArray;
  };
  let currentReward = formatData(JSON.parse(user.desc));
  // let reward = JSON.parse(user.desc);
  // formatData(reward);
  // useEffect(() => {
  //   setFormatedReward(formatData(JSON.parse(user.desc)));
  // }, []);

  console.log("formated data:", currentReward);

  return (
    <div className="leader-board-item-with-rewards">
      <div className="left-div">
        <div className="index">{index}.</div>
        <div className="user-info">
          <img
            src={user?.portrait ? user?.portrait : unknown}
            className="avatar"
            onClick={() => gotoProfile(user?.userId)}
          />
          <div className="nameNLevel">
            <span className="name">{user?.nickname}</span>
            <img
              className="level-img"
              src={getLevelImage(
                isTalent ? user?.actorLevel : user?.userLevel,
                isTalent
              )}
            />
          </div>
        </div>
      </div>
      <div className="right-div">
        {isClawCrane && (
          <div className="extra-icon">
            <img src={clawPoint} />
          </div>
        )}
        <div className={`rewards ${isWheel && "is-talent-wheel"}`}>
          {<LeaderBoardSlider rewards={currentReward} />}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardItemWthRewards;

import React from "react";
import unknown from "../assets/images/unknown-user.png";
import level from "../assets/images/level.PNG";
import ballIcon from "../assets/images/ball-potted-icon.png";
import gemIcon from "../assets/images/gems.png";
import clawPoint from "../assets/images/claw-crane/claw-point-icon.png";
import "../styles/leader-board-item.scss";
import { getLevelImage, getRewardsImage } from "../functions";
import "../styles/leaderboard-item-with-rewards.scss";
import LeaderBoardItemReward from "./LeaderBoardItemReward";

const LeaderBoardItemWthRewards = ({
  user,
  index,
  isClawCrane,
  isTalent,
  iconImg,
  isWheel,
}) => {
  let reward = JSON.parse(user.desc);
  console.log("single reward:", reward);

  return (
    <div className="leader-board-item-with-rewards">
      <div className="left-div">
        <div className="index">{index}.</div>
        <div className="user-info">
          <img src={user.avatar ? user.avatar : unknown} className="avatar" />
          <div className="nameNLevel">
            <span className="name">{user.nickname}</span>
            <img
              className="level-img"
              src={getLevelImage(
                isTalent ? user.actorLevel : user.userLevel,
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
        <div
          className="rewards"
          style={{ width: isWheel && "37vw", marginRight: isWheel && "3vw" }}
        >
          {reward.map((des) => {
            return (
              <LeaderBoardItemReward
                rewImg={getRewardsImage(des.desc)}
                days={des.count}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardItemWthRewards;

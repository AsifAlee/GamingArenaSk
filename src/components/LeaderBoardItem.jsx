import React from "react";
import unknown from "../assets/images/unknown-user.png";
import level from "../assets/images/level.PNG";
import ballIcon from "../assets/images/ball-potted-icon.png";
import clawPoint from "../assets/images/claw-crane/claw-point-icon.png";
import "../styles/leader-board-item.scss";
const LeaderBoardItem = ({ user, index, isClawCrane }) => {
  return (
    <div className="leader-board-item">
      <div className="left-div">
        <div className="index">{index}.</div>
        <div className="user-info">
          <img src={user.avatar ? user.avatar : unknown} className="avatar" />
          <div className="nameNLevel">
            <span className="name">{user.nickname}</span>
            <img className="level-img" src={level} />
          </div>
        </div>
      </div>
      <div className="right-div">
        {isClawCrane && (
          <div className="extra-icon">
            <img src={clawPoint} />
          </div>
        )}

        <div className="game-score">
          <img src={ballIcon} />
          <span>10</span>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardItem;

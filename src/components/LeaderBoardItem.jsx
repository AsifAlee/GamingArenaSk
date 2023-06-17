import React from "react";
import unknown from "../assets/images/unknown-user.png";
import level from "../assets/images/level.PNG";
import ballIcon from "../assets/images/ball-potted-icon.png";
import "../styles/leader-board-item.scss";
const LeaderBoardItem = ({ user, index }) => {
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
        <img src={ballIcon} />
        <span>10</span>
      </div>
    </div>
  );
};

export default LeaderBoardItem;

import React from "react";
import unknown from "../assets/images/unknown-user.png";
import level from "../assets/images/level.PNG";
import ballIcon from "../assets/images/ball-potted-icon.png";
import gemIcon from "../assets/images/gems.png";
import clawPoint from "../assets/images/claw-crane/claw-point-icon.png";
import "../styles/leader-board-item.scss";
import { getLevelImage, gotoProfile } from "../functions";
const LeaderBoardItem = ({ user, index, isClawCrane, isTalent, iconImg }) => {
  return (
    <div className="leader-board-item">
      <div className="left-div">
        <div className="index">{index}.</div>
        <div className="user-info">
          <img
            src={user.portrait ? user.portrait : unknown}
            className="avatar"
            onClick={() => gotoProfile(user.userId)}
          />
          <div className="nameNLevel">
            <span className="name">{user.nickname}</span>
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

        <div className="game-score">
          <img src={iconImg} />
          <span>{user?.userScore}</span>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardItem;

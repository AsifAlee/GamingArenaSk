import React from "react";
import firstFrame from "../assets/images/1st-frame.png";
import secFrame from "../assets/images/2nd-frame.png";
import thirdFrame from "../assets/images/3rd-frame.png";

import unknow from "../assets/images/unknown-user.png";
import ballIcon from "../assets/images/ball-potted-icon.png";
import bean from "../assets/images/bean.png";
import level from "../assets/images/level.PNG";
import base from "../assets/images/base.png";

import "../styles/topper.scss";

const Topper = ({ notFirstRank, index, user }) => {
  const getFrame = () => {
    return index === 0 ? firstFrame : index === 2 ? secFrame : thirdFrame;
  };
  return (
    <div className="topper">
      <div className="images">
        <img className="frame" src={getFrame()} />
        <img className="avatar" src={user.avatar ? user.avatar : unknow} />
      </div>
      <div className={`content`}>
        <div className="info">
          <span className="name">{user.nickname}</span>
          <img className="lvl-img" src={level} />
          <div className="score">
            <img src={ballIcon} />
            <span>100</span>
          </div>
          <div className="est-rew">
            <img src={bean} />
            <span>1000 Est Req</span>
          </div>
        </div>
      </div>
      {!notFirstRank && <img src={base} className="base-img" />}
    </div>
  );
};

export default Topper;

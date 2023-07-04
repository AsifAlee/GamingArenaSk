import React, { useContext, useEffect } from "react";
import firstFrame from "../assets/images/1st-frame.png";
import secFrame from "../assets/images/2nd-frame.png";
import thirdFrame from "../assets/images/3rd-frame.png";

import unknow from "../assets/images/unknown-user.png";
import ballIcon from "../assets/images/ball-potted-icon.png";
import bean from "../assets/images/bean.png";
import level from "../assets/images/level.PNG";
import base from "../assets/images/base.png";

import "../styles/topper.scss";
import { getLevelImage } from "../functions";
import { AppContext } from "../MyContext";

const Topper = ({
  notFirstRank,
  index,
  user,
  iconImg,
  estRewards,
  isToday,
}) => {
  const { info } = useContext(AppContext);

  const getFrame = () => {
    return index === 0 ? firstFrame : index === 2 ? secFrame : thirdFrame;
  };
  const calculateEstRewards = (beansPot, percent) => {
    console.log("beansPot:", beansPot);
    console.log("percent:", percent);

    return (percent / 100) * beansPot.potValue;
  };

  return (
    <div className="topper">
      <div className="images">
        <img className="frame" src={getFrame()} />
        <img className="avatar" src={user?.avatar ? user?.avatar : unknow} />
      </div>
      <div className={`topper-content`}>
        <div className="info" style={{ top: !estRewards && "8vw" }}>
          <span className="name">{user?.nickname}</span>
          <img className="lvl-img" src={getLevelImage(user.userLevel)} />
          <div className="score">
            <img src={iconImg} />
            <span>{user.userScore}</span>
          </div>
          {estRewards && (
            <div className="est-rew">
              <img src={bean} />
              <span>
                {calculateEstRewards(
                  isToday
                    ? info.beanPotList.find(
                        (item) => item.dayIndex === info.dayIndex
                      )
                    : info.beanPotList.find(
                        (item) => item.dayIndex === info.dayIndex - 1
                      ),
                  index === 0 ? 50 : index === 1 ? 30 : 20
                )}
              </span>
            </div>
          )}
        </div>
      </div>
      {!notFirstRank && <img src={base} className="base-img" />}
    </div>
  );
};

export default Topper;

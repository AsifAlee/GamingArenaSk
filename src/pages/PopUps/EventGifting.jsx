import React, { useEffect, useState } from "react";
import title from "../../assets/images/popup/event-gifts-title.png";
import bg from "../../assets/images/popup/event-gifting-bg.png";
import taBar from "../../assets/images/lb-tabs-bar.png";
import eventGifting from "../../assets/images/popup/event-gifting-title.png";
import rewardsTitle from "../../assets/images/rewrads-title.png";
import leaderboardTitle from "../../assets/images/lb-heading.png";

import Topper from "../../components/Topper";
import { testData } from "../../testData";
import LeaderBoardItem from "../../components/LeaderBoardItem";
import close from "../../assets/images/popup/cross.png";
import "../../styles/event-gifting.scss";
const EventGifting = ({ toggleEventGifting }) => {
  const [tabs, setTabs] = useState({
    talent: true,
    gifter: false,
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [isSeeMore, setIsMore] = useState(false);
  const switchTabs = (event) => {
    switch (event.target.name) {
      case "talent":
        setTabs({
          talent: true,
          gifter: false,
        });
        break;
      case "gifter":
        setTabs({
          talent: false,
          gifter: true,
        });
    }
  };
  return (
    <div className="event-gifting-popup ">
      {/* <div className="close-btn">
        <img src={close} onClick={toggleEventGifting} />
      </div> */}
      <div className="content">
        <div className="close-btn">
          <img src={close} onClick={toggleEventGifting} />
        </div>
        <div className="inner-div">
          <img src={eventGifting} className="title" />
          <div className="gifts">
            <img className="title" src={eventGifting} />
          </div>
          <div className="gifting-rewards">
            <div className="tabs">
              <button
                className={`talents ${!tabs.talent && "blackNWhite"}`}
                name="talent"
                onClick={switchTabs}
              />
              <button
                className={`gifters ${!tabs.gifter && "blackNWhite"}`}
                name="gifter"
                onClick={switchTabs}
              />
            </div>
            <img src={taBar} className="base" />
            <div className="rewards">
              <img className="title" src={rewardsTitle} />
            </div>
          </div>
          <div className="leader-board">
            <img className="title" src={leaderboardTitle} />
            <div className="topRank">
              <div className="tabs">
                <button
                  className={`talents ${!tabs.talent && "blackNWhite"}`}
                  name="talent"
                  onClick={switchTabs}
                />
                <button
                  className={`gifters ${!tabs.gifter && "blackNWhite"}`}
                  name="gifter"
                  onClick={switchTabs}
                />
              </div>
              <img src={taBar} className="base" />

              <div className="top1">
                <Topper index={0} user={testData[0]} />
              </div>
              <div className="top2">
                <Topper notFirstRank={true} index={1} user={testData[1]} />
              </div>
              <div className="top3">
                <Topper notFirstRank={true} index={2} user={testData[2]} />
              </div>
            </div>
            <div className="restWinners">
              {testData.slice(3, isSeeMore ? 10 : 20).map((user, index) => (
                <LeaderBoardItem index={index + 4} user={user} />
              ))}
            </div>
            <button
              className={isSeeMore ? "see-more" : "see-less"}
              onClick={() => setIsMore((prevState) => !prevState)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGifting;

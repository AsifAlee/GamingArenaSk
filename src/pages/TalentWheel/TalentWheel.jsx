import React, { useState } from "react";
import wheel from "../../assets/images/wheel/lucky-wheel-inner-bg.png";
import vipWheel from "../../assets/images/wheel/vip-wheel-inner.png";
import bottom from "../../assets/images/wheel/wheel-bottom.png";
import vipBottom from "../../assets/images/wheel/vip-bottom.png";
import "../../styles/talent-wheel.scss";
import { testData } from "../../testData";
import LeaderBoardItem from "../../components/LeaderBoardItem";
import vipTop from "../../assets/images/wheel/vip-top.png";
import wheelTop from "../../assets/images/wheel/wheel-top.png";
const TalentWheel = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [tabs, setTabs] = useState({
    wheel: true,
    vipWheel: false,
  });
  const switchTabs = (event) => {
    switch (event.target.name) {
      case "wheel":
        setTabs({
          wheel: true,
          vipWheel: false,
        });
        break;
      case "luckyWheel":
        setTabs({
          wheel: false,
          vipWheel: true,
        });
    }
  };
  const [playXBtns, setPlayXButtons] = useState({
    x1: true,
    x10: false,
    x100: false,
  });
  const setPlayXTabs = (event) => {
    switch (event.target.name) {
      case "x1":
        setPlayXButtons({ x1: true, x10: false, x100: false });
        break;
      case "x10":
        setPlayXButtons({ x1: false, x10: true, x100: false });
        break;
      case "x100":
        setPlayXButtons({ x1: false, x10: false, x100: true });
        break;
    }
  };
  const toggleRecordsPopup = () => {};
  const toggleDetailPopUp = () => {};
  return (
    <div className="talent-wheel">
      <div className="record-details-btns">
        <button className="records-btn" onClick={() => toggleRecordsPopup()} />
        <button className="game-points">My Gaming points:xx</button>
        <button className="details-btn" onClick={() => toggleDetailPopUp()} />
      </div>
      <div className="wheel-game">
        <button className="heading" />
        <div className="wheel-tabs">
          <button
            className={`lucky-btn ${!tabs.wheel && "blackNWhite"}`}
            onClick={switchTabs}
            name="wheel"
          />
          <button
            className={`vip-btn ${!tabs.vipWheel && "blackNWhite"}`}
            onClick={switchTabs}
            name="luckyWheel"
          />
        </div>
        {tabs.wheel ? (
          <div className="lucky-game">
            <p className="info">25K Beans = 1 Chance</p>
            <div className="spin-wheel">
              <img src={wheelTop} />
              <img src={wheel} className="lucky-wheel-img" />
            </div>
            <img src={bottom} className="bottom" />
          </div>
        ) : (
          <div className="vip-game">
            <p className="info">25K Beans = 1 Chance</p>
            <div className="spin-wheel">
              <img src={vipTop} />
              <img src={vipWheel} className="lucky-wheel-img" />
            </div>
            <img src={vipBottom} className="vip-bottom" />
          </div>
        )}

        <div className="play-btns" style={{ bottom: tabs.vipWheel && "21vw" }}>
          <div className="playX">
            <button
              className={`x1 ${!playXBtns.x1 && "blackNWhite"}`}
              name="x1"
              onClick={setPlayXTabs}
            />
            <button
              className={`x10 ${!playXBtns.x10 && "blackNWhite"}`}
              name="x10"
              onClick={setPlayXTabs}
            />
            <button
              className={`x100 ${!playXBtns.x100 && "blackNWhite"}`}
              name="x100"
              onClick={setPlayXTabs}
            />
          </div>
          <button className="spin" />
        </div>
      </div>
      <div className="leader-board">
        <button className="heading" />
        <div className="winners">
          {testData.slice(0, isSeeMore ? 10 : 20).map((user, index) => (
            <LeaderBoardItem
              user={user}
              index={index + 1}
              isClawCrane={false}
            />
          ))}
        </div>

        <button
          className={isSeeMore ? "see-more" : "see-less"}
          onClick={() => setIsSeeMore((prevState) => !prevState)}
        />
      </div>
      <p className="rights">ALL RIGHTS RESERVED BY STREAMKAR</p>
    </div>
  );
};

export default TalentWheel;

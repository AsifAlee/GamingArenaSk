import React from "react";
import cue from "../../../assets/images/cue.png";
import ballPottedIcon from "../../../assets/images/ball-potted-icon.png";
import beansPotTitle from "../../../assets/images/beanspot-title.png";
import beansPot from "../../../assets/images/beans-pot.png";
import rewardsTitle from "../../../assets/images/rewrads-title.png";
import "../../../styles/billiard.scss";
import { useState } from "react";
import Slider from "../../../components/Slider";
import leaderBoardTitlt from "../../../assets/images/lb-heading.png";
import TabButton from "../../../components/TabButton";
import today from "../../../assets/images/today.png";
import previousDay from "../../../assets/images/previous-day.png";
import LeaderBoard from "./LeaderBoard";
import { testData } from "../../../testData";
import BilliardsDetail from "../../PopUps/BilliardsDetail";
import BillardsRecords from "../../PopUps/BillardsRecords";
import table from "../../../assets/images/table.png";
import BilliardGame from "../../PopUps/BilliardGame";
const Billiards = () => {
  const [isQueRecharged, setIsQueRecharged] = useState(false);
  const [detailPopup, setDetailPopup] = useState(false);
  const [recordsPopup, setRecordsPopup] = useState(false);
  const [gamePopUp, setGamePopup] = useState(false);
  const toggleDetailPopUp = () => {
    setDetailPopup((prevState) => !prevState);
  };
  const toggleRecordsPopup = () => {
    setRecordsPopup((prevState) => !prevState);
  };
  const toggleGamePopUp = () => {
    setGamePopup((prevState) => !prevState);
  };
  const [playXBtns, setPlayXButtons] = useState({
    x1: true,
    x10: false,
    x100: false,
  });
  const [leaderBoardTabs, setLeaderBoardTabs] = useState({
    today: true,
    yest: false,
  });
  const changeLeaderBrdTabs = (name) => {
    switch (name) {
      case "today":
        setLeaderBoardTabs({
          today: true,
          yest: false,
        });
        break;

      case "yest":
        setLeaderBoardTabs({
          today: false,
          yest: true,
        });
    }
  };
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

  const rechargeQue = () => {
    setIsQueRecharged((prev) => !prev);
    setGamePopup(true);
  };
  const playGame = () => {
    setGamePopup(true);
  };
  return (
    <div className="billiards-section">
      <div className="record-details-btns">
        <button className="records-btn" onClick={() => toggleRecordsPopup()} />
        <button className="details-btn" onClick={() => toggleDetailPopUp()} />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button className="game-points">My Gaming points:xx</button>
      </div>

      <div className="billiard-game">
        <div>
          <img className="table" src={table} />
        </div>
        <div className="cue">
          <img src={cue} />
        </div>
        <button
          className={isQueRecharged ? "recharge-cue-off" : "recharge-cue"}
          onClick={() => rechargeQue()}
        />

        <div className="play-section">
          <div className="xPlay">
            <button
              className={playXBtns.x1 ? "x1" : "x1-off"}
              name="x1"
              onClick={setPlayXTabs}
            />
            <button
              className={playXBtns.x10 ? "x10" : "x10-off"}
              name="x10"
              onClick={setPlayXTabs}
            />
            <button
              className={playXBtns.x100 ? "x100" : "x100-off"}
              name="x100"
              onClick={setPlayXTabs}
            />
          </div>
          <button className="playBtn" onClick={playGame} />
        </div>
        <div className="balls-potted">
          <img src={ballPottedIcon} />
          <span>Balls Potted:0</span>
        </div>
      </div>
      <div className="rest-section">
        <div className="rewards">
          <img src={rewardsTitle} className="title" />
          <Slider />
        </div>
        <div className="beans-pot">
          <img src={beansPotTitle} className="title" />
          <img src={beansPot} className="beans-pot-img" />
          <div className="beans-potted">
            <img src={ballPottedIcon} />
            <span>Beans Pot Counter:0</span>
          </div>
        </div>
        <div className="leaderboard">
          <img src={leaderBoardTitlt} className="title" />
          <div className="tabs">
            <TabButton
              bgImg={today}
              changeLeaderBrdTabs={changeLeaderBrdTabs}
              name="today"
              isActive={leaderBoardTabs.today}
            />
            <TabButton
              bgImg={previousDay}
              name="yest"
              changeLeaderBrdTabs={changeLeaderBrdTabs}
              isActive={leaderBoardTabs.yest}
            />
          </div>
          <div className="bottom-line" />
          <LeaderBoard data={testData} />
        </div>
      </div>

      {detailPopup && <BilliardsDetail toggleDetailPopUp={toggleDetailPopUp} />}
      {recordsPopup && (
        <BillardsRecords toggleRecordsPopup={toggleRecordsPopup} />
      )}
      {gamePopUp && <BilliardGame toggleGamePopUp={toggleGamePopUp} />}
    </div>
  );
};

export default Billiards;

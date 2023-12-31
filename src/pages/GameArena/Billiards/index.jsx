import React, { useContext, useEffect } from "react";
import cue from "../../../assets/images/cue.png";
import ballPottedIcon from "../../../assets/images/ball-potted-icon.png";
import beansPotTitle from "../../../assets/images/beanspot-title.png";
import beansPotImg from "../../../assets/images/beans-pot.png";
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
import { AppContext } from "../../../MyContext";
import gamePointIcon from "../../../assets/images/gaming-point-icon.png";
import Marquee from "react-fast-marquee";
import { baseUrl, testToken, testUserId } from "../../../service/api";
import RechargeQue from "../../PopUps/RechargeQue";
// import billardSvg from "../../../assets/svgs/PoolGame.svga";
// import clawSvg from "../../../assets/svgs/Claw_Crane_Game.svga";
// import cueStick from "../../../assets/svgs/SnookerStick.svga";
import poolSvg from "../../../assets/svgs/PoolGame.svga";
import unknownUser from "../../../assets/images/unknown-user.png";
import beansIcon from "../../../assets/images/bean.png";
// import billardSvg from "../../../assets/svgs/PoolGame.svga";
import mascot from "../../../assets/images/mascot.png";
import cueChargin from "../../../assets/images/stick-charging.gif";

import "../../../styles/marquee.scss";
import SvgPlayer from "../../../components/SvgPlayer";
import TravelSvga from "../../../components/Svga2";

const Billiards = () => {
  const {
    info,
    marqueeData,
    getInfo,
    user,
    leaderBoardData,
    records,
    getBilliardsLeaderBoardData,
    getRecords,
  } = useContext(AppContext);

  const { rechargeCue, totalBillardsScore, beanPotList } = info;

  const [queCode, setQueCode] = useState(null);
  const [rechargeMsg, setRechargeMsg] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isQueRecharging, setIsQueRecharging] = useState(false);
  const [detailPopup, setDetailPopup] = useState(false);
  const [recordsPopup, setRecordsPopup] = useState(false);
  const [gamePopUp, setGamePopup] = useState(false);
  const [beansPot, setBeansPot] = useState(0);
  const [showRechargeQue, setShowRechargeQue] = useState(false);
  const [gameErrCode, setGameErrCode] = useState(null);
  const [rewardData, setRewardData] = useState([]);
  const [gameMsg, setGameMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const rewards = [
    {
      rank: "Top 1st",
      reward: "50% of beans pot",
      img: "beansbag",
    },
    {
      rank: "Top 2nd",
      reward: "30% of beans pot",
      img: "beansbag",
    },
    {
      rank: "Top 3rd",
      reward: "20% of beans pot",
      img: "beansbag",
    },
  ];
  const toggleDetailPopUp = () => {
    setDetailPopup((prevState) => !prevState);
  };
  const toggleRecordsPopup = () => {
    setRecordsPopup((prevState) => !prevState);
  };
  const toggleGamePopUp = () => {
    setGamePopup((prevState) => !prevState);
  };
  const toggleQuePopUp = () => {
    setShowRechargeQue((prevState) => !prevState);
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

  const getBeansPot = () => {
    if (leaderBoardTabs.today) {
      setBeansPot(
        info?.beanPotList?.find((pot) => pot.dayIndex === info.dayIndex)
          ?.potValue
      );
    } else {
      setBeansPot(
        info?.beanPotList?.find((pot) => pot.dayIndex === info.dayIndex - 1)
          ?.potValue
      );
    }
  };

  useEffect(() => {
    getBeansPot();
  }, [leaderBoardTabs]);
  useEffect(() => {
    getBeansPot();
  }, [info.beanPotList]);

  const doRechargeQue = () => {
    setIsQueRecharging(true);

    fetch(`${baseUrl}/api/activity/gamingArena/rechargeCue`, {
      method: "POST",
      headers: {
        // userId: testUserId,
        // token: testToken,
        userId: user.uid,
        token: user.token,
      },
    })
      .then((response) => response?.json())
      .then((response) => {
        if (response.data === true) {
          setTimeout(() => {
            setIsQueRecharging(false);
            getInfo(false);
            setShowRechargeQue(true);
            setRechargeMsg(response.msg);
            setQueCode(response?.errorCode);
          }, 4000);
        } else {
          setTimeout(() => {
            setIsQueRecharging(false);
            getInfo(false);
            setShowRechargeQue(true);
            setRechargeMsg(response.msg);
            setQueCode(response?.errorCode);
          }, 4000);
        }

        // setRechargeMsg(response.msg);
        // setQueCode(response?.errorCode);
        // if (response.errorCode === 0) setIsQueRecharged(true);
        // if (response.errorCode === 10000008) setIsQueRecharged(true);
        // getInfo();
        // setShowRechargeQue(true);
      })
      .catch((error) => {
        console.error("api error", error.messsage);
        setShowRechargeQue(false);
        setIsQueRecharging(false);
      });
  };
  const playGame = () => {
    setIsDisabled(true);
    fetch(`${baseUrl}/api/activity/gamingArena/playGame`, {
      method: "POST",
      headers: {
        // userId: testUserId,
        // token: testToken,
        userId: user.uid,
        token: user.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: 1,
        playCount: playXBtns.x1 ? 1 : playXBtns.x10 ? 10 : 100,
      }),
    })
      .then((response) => response?.json())
      .then((response) => {
        if (response.errorCode === 10000004) {
          setIsDisabled(true);
          setGamePopup(true);
          setGameErrCode(response?.errorCode);
          setIsDisabled(false);
        } else {
          setIsPlaying(true);

          setGameMsg(response.msg);
          setIsPlaying(true);
          setRewardData(response?.data);
          setTimeout(() => {
            setIsPlaying(false);
            setGamePopup(true);
            setGameErrCode(response?.errorCode);
            getInfo(false);
            getBilliardsLeaderBoardData();
            getRecords(1);
            setIsDisabled(false);
          }, 3000);
        }
      })
      .catch((error) => {
        setIsPlaying(false);
        console.error("api error", error.messsage);
      });
  };
  return (
    <div className="billiards-section">
      <div className="record-details-btns">
        <button className="records-btn" onClick={() => toggleRecordsPopup()} />
        <button className="details-btn" onClick={() => toggleDetailPopUp()} />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="game-points">
          <img src={gamePointIcon} />
          <span>My Gaming points:{info?.gamePoints}</span>
        </div>
      </div>
      <Marquee className="marquee">
        {leaderBoardData?.billiards?.slice(0, 3).map((item, index) => {
          return (
            <div className="marquee-item" key={index}>
              <img
                src={item?.portrait ? item?.portrait : unknownUser}
                className="user-img"
              />
              <div className="user-details">
                <span className="name">
                  {`${item?.nickname?.slice(0, 6)}`} &nbsp;{" "}
                </span>
                <span>
                  has ranked{" "}
                  {`${index === 0 ? "1st" : index === 1 ? "2nd" : "3rd"} `} and
                  potted {item?.userScore} balls in billiards game
                </span>
              </div>
            </div>
          );
        })}
      </Marquee>

      <div className="billiard-game">
        <TravelSvga src={poolSvg} snookerTable={true} start={isPlaying} />

        <div className="cue">
          {isQueRecharging === false ? (
            <img src={cue} />
          ) : (
            <img src={cueChargin} />
          )}
          <div id="extraContent"></div>
        </div>
        <button
          // className={
          //   rechargeCue || isQueRecharging ? "blackNWhite" : "recharge-cue"
          // }
          className={`recharge-cue ${
            rechargeCue || isQueRecharging ? "blackNWhite" : ""
          } `}
          onClick={() => doRechargeQue()}
          disabled={rechargeCue === true || isQueRecharging === true}
        />
        <span className="points-req">5k points req</span>

        <div className="play-section">
          <div className="xPlay">
            <button
              className={`x1 ${playXBtns.x1 === false && "blackNWhite"}`}
              name="x1"
              onClick={setPlayXTabs}
            />
            <button
              // className={playXBtns.x10 ? "x10" : "blackNwhite"}
              className={`x10 ${playXBtns.x10 === false && "blackNWhite"}`}
              name="x10"
              onClick={setPlayXTabs}
            />
            <button
              // className={playXBtns.x100 ? "x100" : "blackNwhite"}
              className={`x100 ${playXBtns.x100 === false && "blackNWhite"}`}
              name="x100"
              onClick={setPlayXTabs}
            />
          </div>
          <button
            className={`playBtn ${
              isPlaying || isDisabled || rechargeCue === false
                ? "blackNWhite"
                : ""
            }`}
            onClick={isDisabled ? () => {} : playGame}
            // style={{
            //   filter:
            //     isPlaying === true || (rechargeCue === false && "grayScale(1)"),
            // }}
            disabled={isPlaying === true || rechargeCue === false || isDisabled}
          />
        </div>
        <div className="balls-potted">
          <img src={ballPottedIcon} />
          <span>Balls Potted:{totalBillardsScore}</span>
        </div>
      </div>
      <div className="rest-section">
        <img src={mascot} className="mascot" />
        <div className="rewards">
          <img src={rewardsTitle} className="title" />
          <Slider rewards={rewards} billiards={true} />
        </div>
        <div className="beans-pot">
          <img src={beansPotTitle} className="title" />
          <img src={beansPotImg} className="beans-pot-img" />
          <div className="beans-potted">
            <img src={beansIcon} />
            <span>Beans Pot Counter:{beansPot}</span>
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
          <LeaderBoard
            data={
              leaderBoardTabs.today
                ? leaderBoardData.billiards
                : leaderBoardData.billiardsYest
            }
            billiards={true}
            foosball={false}
            isToday={leaderBoardTabs.today ? true : false}
            isTalent={false}
          />
        </div>
      </div>
      <p className="rights">ALL RIGHTS RESERVED BY STREAMKAR</p>

      {detailPopup && <BilliardsDetail toggleDetailPopUp={toggleDetailPopUp} />}
      {recordsPopup && (
        <BillardsRecords toggleRecordsPopup={toggleRecordsPopup} />
      )}
      {gamePopUp && (
        <BilliardGame
          toggleGamePopUp={toggleGamePopUp}
          data={rewardData}
          gameErrCode={gameErrCode}
          gameMsg={gameMsg}
        />
      )}
      {showRechargeQue && (
        <RechargeQue
          toggleQuePopUp={toggleQuePopUp}
          queCode={queCode}
          msg={rechargeMsg}
        />
      )}
    </div>
  );
};

export default Billiards;

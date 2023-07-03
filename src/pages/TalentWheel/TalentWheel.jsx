import React, { useContext, useState } from "react";
import wheel from "../../assets/images/wheel/lucky-wheel-inner-bg.png";
import vipWheel from "../../assets/images/wheel/vip-wheel-inner.png";
import bottom from "../../assets/images/wheel/wheel-bottom.png";
import vipBottom from "../../assets/images/wheel/vip-bottom.png";
import { testData } from "../../testData";
import LeaderBoardItem from "../../components/LeaderBoardItem";
import vipTop from "../../assets/images/wheel/vip-top.png";
import wheelTop from "../../assets/images/wheel/wheel-top.png";
import { AppContext } from "../../MyContext";
import gamePointIcon from "../../assets/images/gaming-point-icon.png";
import { baseUrl, testToken, testUserId } from "../../service/api";
import Marquee from "react-fast-marquee";
import "../../styles/talent-wheel.scss";
import "../../styles/marquee.scss";
import VipWheel from "../../components/VipWheel";
import LuckyWheel from "../../components/LuckyWheel";
import LuckyWheelPopUp from "../PopUps/LuckyWheelPopUp";
import VipWheelPopup from "../PopUps/VipWheelPopUp";

const TalentWheel = () => {
  const { info, marqueeData, getInfo, user, leaderBoardData } =
    useContext(AppContext);
  let { talentWheel } = leaderBoardData;

  const [isSeeMore, setIsSeeMore] = useState(false);
  const [tabs, setTabs] = useState({
    wheel: true,
    vipWheel: false,
  });
  const vipStep = 40;
  const luckyStep = 51;
  const [rotateDegLucky, setRotateDegLucky] = useState(0);
  const [isRotatingLucky, setIsRotatingLucky] = useState(false);
  const [rotateDegVip, setRotateDegVip] = useState(0);
  const [isRotatingVip, setIsRotatingvip] = useState(false);
  const [rewardData, setRewardData] = useState([]);
  const [gameErrCode, setGameErrCode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [luckyPopUp, setLuckyPopUp] = useState(false);
  const [vipPopup, setVipPopup] = useState(false);
  const [respMsg, setRespMsg] = useState("");

  const toggleLuckyPopup = () => {
    setLuckyPopUp((prevState) => !prevState);
  };
  const toggleVipPopup = () => {
    setVipPopup((prevState) => !prevState);
  };
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

  const findLuckyAngle = (rewards) => {
    if (rewards?.length === 0) {
      setRotateDegLucky(0);
    } else {
      switch (rewards[0]?.desc) {
        case "Charmed Frame":
          setRotateDegLucky(1);
          break;
        case "Brave Heart frame":
          setRotateDegLucky(2);
          break;
        case "Victorious frame (NEW)":
          setRotateDegLucky(3);
          break;
        case "SVIP":
          setRotateDegLucky(4);
          break;
        case "gems":
          setRotateDegLucky(5);
          break;

        case "Victorious room skin (NEW)":
          setRotateDegLucky(6);
          break;
        default:
          setIsRotatingLucky(0);
          break;
      }
    }
  };

  const findVipLuckyAngle = (rewards) => {
    if (rewards.length === 0) {
      setRotateDegVip(0);
    } else {
      switch (rewards[0].desc) {
        case "Bumblebee entrance":
          setRotateDegVip(1);
          break;
        case "Enlightening Room Skin":
          setRotateDegVip(2);
          break;
        case "SVIP":
          setRotateDegVip(3);
          break;
        case "gems":
          setRotateDegVip(4);
          break;
        case "Victorious frame (NEW)":
          setRotateDegVip(5);
          break;

        case "Victorious room skin (NEW)":
          setRotateDegVip(6);
          break;
        case "Game Master frame":
          setRotateDegVip(7);
          break;
        case "Game Master room skin":
          setRotateDegVip(8);
          break;
        default:
          setRotateDegVip(0);
          break;
      }
    }
  };

  const playLuckyGame = () => {
    setIsRotatingLucky(true);
    setIsPlaying(true);
    fetch(`${baseUrl}/api/activity/gamingArena/playGame`, {
      method: "POST",
      headers: {
        // userId: testUserId,
        // token: testToken,
        userId: user?.uid,
        token: user?.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: 4,
        playCount: playXBtns.x1 ? 1 : playXBtns.x10 ? 10 : 100,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response?.data?.rewardDTOList.length > 0) {
          findLuckyAngle(response?.data?.rewardDTOList);
        }
        setTimeout(() => {
          setIsRotatingLucky(false);
          setLuckyPopUp(true);
          setIsPlaying(false);
          setRespMsg(response.msg);
          setGameErrCode(response.errorCode);
          setRewardData(response?.data);
          getInfo();
        }, 4000);
      })
      .catch((error) => {
        console.error("Api error:", error.message);
      });
  };
  const playVipGame = () => {
    console.log("vip game called");
    setIsPlaying(true);
    setIsRotatingvip(true);

    fetch(`${baseUrl}/api/activity/gamingArena/playGame`, {
      method: "POST",
      headers: {
        // userId: testUserId,
        // token: testToken,
        userId: user?.uid,
        token: user?.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: 5,
        playCount: playXBtns.x1 ? 1 : playXBtns.x10 ? 10 : 100,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response?.data?.rewardDTOList.length > 0) {
          findVipLuckyAngle(response?.data?.rewardDTOList);
        }

        setTimeout(() => {
          setIsRotatingvip(false);
          setVipPopup(true);
          setGameErrCode(response.errorCode);
          setRewardData(response?.data);
          setRespMsg(response.msg);
          getInfo();
          setRotateDegVip(0);
          setIsPlaying(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("Api error:", error.message);
      });
  };
  return (
    <div className="talent-wheel">
      <div className="record-details-btns">
        <button className="records-btn" onClick={() => toggleRecordsPopup()} />
        <div className="game-points">
          <img src={gamePointIcon} />
          <span>My Gaming points:{info.gamePoints}</span>
        </div>
        <button className="details-btn" onClick={() => toggleDetailPopUp()} />
      </div>
      <Marquee className="marquee">
        {marqueeData?.vipWheel?.map((item) => (
          <div className="marquee-item">
            <img src={item?.portrait} className="user-img" />
            <div className="user-details">
              <span className="name">
                {`${item?.nickname?.slice(0, 6)}`} &nbsp;{" "}
              </span>
              <span>has won rewards_name for x days.Congratulations!</span>
            </div>
          </div>
        ))}
      </Marquee>
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
          // <div className="lucky-game">
          //   <p className="info">25K Beans = 1 Chance</p>
          //   <div className="spin-wheel">
          //     <img src={wheelTop} className="top" />
          //     <img
          //       src={wheel}
          //       className={`lucky-wheel-img ${
          //         isRotatingLucky === false && "rotate-0"
          //       }`}
          //       style={{
          //         transform: `rotate(${luckyStep * rotateDegLucky}deg)`,
          //       }}
          //     />
          //   </div>
          //   <img src={bottom} className="bottom" />
          // </div>
          <LuckyWheel
            isRotatingLucky={isRotatingLucky}
            luckyStep={luckyStep}
            rotateDegLucky={rotateDegLucky}
          />
        ) : (
          // <div className="vip-game">
          //   <p className="info">25K Beans = 1 Chance</p>
          //   <div className="spin-wheel">
          //     <img src={vipTop} className="top" />
          //     <img
          //       src={vipWheel}
          //       className={`vip-wheel-img ${
          //         isRotatingVip === false && "rotate-0"
          //       }`}
          //       style={{ transform: `rotate(${vipStep * rotateDegVip}deg)` }}
          //     />
          //   </div>
          //   <img src={vipBottom} className="vip-bottom" />
          // </div>
          <VipWheel
            isRotatingVip={isRotatingVip}
            vipStep={vipStep}
            rotateDegVip={rotateDegVip}
          />
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
          <button
            className={`spin ${isPlaying && "blackNWhite"}`}
            onClick={tabs.wheel === true ? playLuckyGame : playVipGame}
          />
        </div>
      </div>
      <div className="leader-board">
        <button className="heading" />
        <div className="winners">
          {talentWheel.slice(0, isSeeMore ? 10 : 20).map((user, index) => (
            <LeaderBoardItem
              user={user}
              index={index + 1}
              isClawCrane={false}
              isTalent={true}
            />
          ))}
        </div>

        <button
          className={isSeeMore ? "see-more" : "see-less"}
          onClick={() => setIsSeeMore((prevState) => !prevState)}
        />
      </div>
      <p className="rights">ALL RIGHTS RESERVED BY STREAMKAR</p>
      {luckyPopUp && (
        <LuckyWheelPopUp
          toggleLuckyPopup={toggleLuckyPopup}
          gameErrCode={gameErrCode}
          data={rewardData}
          respMsg={respMsg}
        />
      )}
      {vipPopup && (
        <VipWheelPopup
          toggleVipPopup={toggleVipPopup}
          gameErrCode={gameErrCode}
          data={rewardData}
          respMsg={respMsg}
        />
      )}
    </div>
  );
};

export default TalentWheel;

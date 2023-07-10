import React, { useContext, useEffect, useState } from "react";
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
import unknownUser from "../../assets/images/unknown-user.png";
import LeaderBoardItemWthRewards from "../../components/LeaderBoardItemWthRewards";
import LuckyWheel2 from "../../components/LuckyWheel2";

const TalentWheel = () => {
  const [angleOfRotation, setAngleOfRotation] = useState(0);

  const {
    info,
    marqueeData,
    getInfo,
    leaderBoardData,
    getLuckyWheelLeaderbrdData,
    getVipWheelLeaderBoardData,
    user,
  } = useContext(AppContext);
  let { luckyTalentWheel, vipLuckyWheel } = leaderBoardData;

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
  const [selectedData, setSelectedDate] = useState([]);
  const [isRotatingFinished, setIsRotatingFinished] = useState(false);

  useEffect(() => {
    if (tabs.wheel) {
      setSelectedDate(luckyTalentWheel);
    } else {
      setSelectedDate(vipLuckyWheel);
    }
  }, [tabs.wheel]);
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

  const resetAngle = () => {
    setAngleOfRotation(0);
  };
  const findLuckyAngle = (rewards) => {
    if (rewards?.length === 0) {
      setAngleOfRotation(0);
    } else {
      switch (rewards[0]?.desc) {
        case "Charmed Frame":
          setAngleOfRotation(1 * luckyStep);
          setRotateDegVip(1);
          break;
        case "Brave Heart frame":
          setAngleOfRotation(2 * luckyStep);
          setRotateDegVip(2);

          break;
        case "Victorious frame (NEW)":
          setAngleOfRotation(3 * luckyStep);
          setRotateDegVip(3);

          break;
        case "SVIP":
          setAngleOfRotation(4 * luckyStep);
          setRotateDegVip(4);

          break;
        case "gems":
          setAngleOfRotation(5 * luckyStep);
          setRotateDegVip(5);

          break;

        case "Victorious room skin (NEW)":
          setAngleOfRotation(6 * luckyStep);
          setRotateDegVip(6);

          break;
        default:
          setIsRotatingLucky(false);
          setAngleOfRotation(0);
          break;
      }
    }
  };

  const findVipLuckyAngle = (rewards) => {
    if (rewards.length === 0) {
      setAngleOfRotation(0);
    } else {
      switch (rewards[0].desc) {
        case "Bumblebee entrance":
          setAngleOfRotation(1 * vipStep);
          break;
        case "Enlightening Room Skin":
          setAngleOfRotation(2 * vipStep);
          break;
        case "gems":
          setAngleOfRotation(3 * vipStep);
          break;
        case "SVIP":
          setAngleOfRotation(4 * vipStep);
          break;

        case "Victorious frame (NEW)":
          setAngleOfRotation(7 * vipStep);
          break;

        case "Victorious room skin (NEW)":
          setAngleOfRotation(6 * vipStep);
          break;
        case "Game Master frame (New)":
          setAngleOfRotation(5 * vipStep);
          break;

        case "Game Master room skin":
          setAngleOfRotation(8 * vipStep);
          break;

        default:
          setAngleOfRotation(0);
          break;
      }
    }
  };

  const rotateIndefinitely = (text) => {
    if (text === "lucky") {
      setIsRotatingLucky(true);
      callApiAndFindLuckyAngle();
    } else {
      setIsRotatingvip(true);
      callApiFindVipAngle();
    }
    setIsPlaying(true);

    setTimeout(() => {
      setIsRotatingLucky(false);
      setIsRotatingvip(false);
    }, 6000);
  };

  const callApiAndFindLuckyAngle = () => {
    fetch(`${baseUrl}/api/activity/gamingArena/playGame`, {
      method: "POST",
      headers: {
        userId: testUserId,
        token: testToken,
        // userId: user?.uid,
        // token: user?.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: 4,
        playCount: playXBtns.x1 ? 1 : playXBtns.x10 ? 10 : 100,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.errorCode === 10000004) {
          setGameErrCode(response.errorCode);
          setIsPlaying(false);
          setIsRotatingLucky(false);
          setIsRotatingFinished(true);
          setLuckyPopUp(true);
        } else {
          findLuckyAngle(response?.data?.rewardDTOList);
          setTimeout(() => {
            setTimeout(() => {
              setLuckyPopUp(true);
            }, 1000);

            setIsRotatingLucky(false);
            setIsPlaying(false);
            setIsRotatingFinished(true);
            setRespMsg(response.msg);
            setGameErrCode(response.errorCode);
            setRewardData(response?.data);
            getInfo();
            getLuckyWheelLeaderbrdData();
          }, 4000);
        }
      })
      .catch((error) => {
        console.error("Api error:", error.message);
      });
  };

  const callApiFindVipAngle = () => {
    fetch(`${baseUrl}/api/activity/gamingArena/playGame`, {
      method: "POST",
      headers: {
        userId: testUserId,
        token: testToken,
        // userId: user?.uid,
        // token: user?.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: 5,
        playCount: playXBtns.x1 ? 1 : playXBtns.x10 ? 10 : 100,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        findVipLuckyAngle(response?.data?.rewardDTOList);

        setTimeout(() => {
          setTimeout(() => {
            setVipPopup(true);
          }, 1000);
          setIsRotatingvip(false);
          setGameErrCode(response.errorCode);
          setRewardData(response?.data);
          setRespMsg(response.msg);
          getInfo();
          setIsPlaying(false);
          getVipWheelLeaderBoardData();
        }, 4000);
      })
      .catch((error) => {
        console.error("Api error:", error.message);
      });
  };

  const playLuckyGame = () => {
    rotateIndefinitely("lucky");
  };

  const playVipGame = () => {
    rotateIndefinitely("vip");
  };
  return (
    <div className="talent-wheel">
      <div className="record-details-btns">
        <div className="game-points">
          <img src={gamePointIcon} />
          <span>My Talent points:{info?.talentPoints}</span>
        </div>
      </div>
      <Marquee className="marquee">
        {marqueeData?.vipWheel?.map((item) => {
          let rewDescriptions = JSON.parse(item.desc);

          return (
            <div className="marquee-item">
              <img
                src={item?.portrait ? item?.portrait : unknownUser}
                className="user-img"
              />
              <div className="user-details">
                <span className="name">
                  {`${item?.nickname?.slice(0, 6)}`} &nbsp;{" "}
                </span>
                <div>
                  &nbsp;has &nbsp;won&nbsp;
                  {rewDescriptions.map((item) => {
                    return (
                      <span>
                        {item.desc === "Beans" ? (
                          <span className="text">{`${item.count} Beans`}</span>
                        ) : item.desc === "gems" ? (
                          <span className="text">{`${item.count} Gems`}</span>
                        ) : (
                          <span className="text">{`${item.desc}  x${
                            item.count > 1
                              ? `${item.count} days`
                              : `${item.count} day`
                          }`}</span>
                        )}
                      </span>
                    );
                  })}
                  .Congratulations!
                </div>
              </div>
            </div>
          );
        })}
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
          <LuckyWheel2
            isRotatingLucky={isRotatingLucky}
            luckyStep={luckyStep}
            rotateDegLucky={rotateDegLucky}
            isRotatingFinished={isRotatingFinished}
            angleOfRotation={angleOfRotation}
          />
        ) : (
          <VipWheel
            isRotatingVip={isRotatingVip}
            vipStep={vipStep}
            rotateDegVip={rotateDegVip}
            angleOfRotation={angleOfRotation}
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
            disabled={isPlaying}
          />
        </div>
      </div>
      <div className="leader-board">
        <button className="heading" />
        <div className="winners">
          {selectedData?.slice(0, isSeeMore ? 10 : 20).map((user, index) => (
            <LeaderBoardItemWthRewards
              user={user}
              index={index + 1}
              isClawCrane={false}
              isWheel={true}
              isTalent={true}
            />
          ))}
        </div>

        {selectedData.length > 10 && (
          <button
            className={isSeeMore ? "see-more" : "see-less"}
            onClick={() => setIsSeeMore((prevState) => !prevState)}
          />
        )}
      </div>
      <p className="rights">ALL RIGHTS RESERVED BY STREAMKAR</p>
      {luckyPopUp === true ? (
        <LuckyWheelPopUp
          toggleLuckyPopup={toggleLuckyPopup}
          gameErrCode={gameErrCode}
          data={rewardData}
          respMsg={respMsg}
          angleOfRotation={angleOfRotation}
          resetAngle={resetAngle}
        />
      ) : (
        "Nothing to show "
      )}
      {vipPopup && (
        <VipWheelPopup
          toggleVipPopup={toggleVipPopup}
          gameErrCode={gameErrCode}
          data={rewardData}
          respMsg={respMsg}
          resetAngle={resetAngle}
          angleOfRotation={angleOfRotation}
        />
      )}
    </div>
  );
};

export default TalentWheel;

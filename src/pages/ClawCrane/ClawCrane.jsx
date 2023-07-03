import React, { useState } from "react";
import { testData } from "../../testData";
import "../../styles/claw-crane.scss";
import LeaderBoardItem from "../../components/LeaderBoardItem";
import ClawCraneDetail from "../PopUps/ClawCraneDetail";
import { baseUrl, testToken, testUserId } from "../../service/api";
import Marquee from "react-fast-marquee";
import "../../styles/marquee.scss";
import { useContext } from "react";
import { AppContext } from "../../MyContext";
import ClawCranePopUp from "../PopUps/ClawCrane";
import ClawCraneRecords from "../PopUps/ClawCraneRecords";
import SvgPlayer from "../../components/SvgPlayer";
import { ReactComponent as Logo } from "../../logo.svg";
import clawCraneSvg from "../../assets/svgs/Claw_Crane_Game.svga";
import clawCraneImg from "../../assets/images/claw-crane/game.png";
// import poolGame from "../../assets/svgs/PoolGame.svga";
import IconMenu from "../../assets/svgs/Claw_Crane_Game.svga";
const ClawCrane = ({}) => {
  const { info, marqueeData, getInfo, user, leaderBoardData } =
    useContext(AppContext);
  const toggleRecordsPopup = () => {
    setShowRecords((prevState) => !prevState);
  };
  let { crawlCrane } = leaderBoardData;

  const [gameErrCode, setGameErrCode] = useState(null);
  const [rewardData, setRewardData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gamePopUp, setGamePopup] = useState(false);
  const [gameMsg, setGameMsg] = useState("");

  const toggleDetailPopUp = () => {
    setShowDetails((prevState) => !prevState);
  };
  const toggleGamePopUp = () => {
    setGamePopup((prevState) => !prevState);
  };

  const [isSeeMore, setIsSeeMore] = useState(false);
  const [showRecords, setShowRecords] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const playCrawlCrane = () => {
    setIsPlaying(true);

    fetch(`${baseUrl}/api/activity/gamingArena/playGame`, {
      method: "POST",
      headers: {
        // userId: testUserId,
        // token: testToken,
        userId: user.uid,
        token: user.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: 3, playCount: 1 }),
    })
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setIsPlaying(false);
          setGamePopup(true);
          setRewardData(response?.data);
          setGameErrCode(response.errorCode);
          getInfo();
          setGameMsg(response?.msg);
        }, 4000);
      })
      .catch((error) => {
        setIsPlaying(false);
        console.error("Api error:", error.message);
      });
  };

  return (
    <div className="claw-crane">
      <div className="record-details-btns">
        <button className="records-btn" onClick={() => toggleRecordsPopup()} />
        <button className="game-points">
          My Gaming points:{info?.gamePoints}
        </button>
        <button className="details-btn" onClick={() => toggleDetailPopUp()} />
      </div>
      <Marquee className="marquee">
        {marqueeData?.clawCrane?.map((item) => (
          <div className="marquee-item">
            <img src={item?.portrait} className="user-img" />
            <div className="user-details">
              <span className="name">{`${item?.nickname?.slice(0, 6)}`}</span>
              <span>has won reward_name from Claw Crane.</span>
            </div>
          </div>
        ))}
      </Marquee>
      <div className="crane-game">
        <div className="game">
          {isPlaying === false ? (
            <img src={clawCraneImg} />
          ) : (
            <SvgPlayer src={clawCraneSvg} crane={true} />
          )}
          {/* <img src={clawCraneSvg} alt="Claw crane" /> */}
          {/* <IconMenu /> */}
          {/* <svg src={clawCraneSvg} /> */}

          <button
            className={`get-btn ${isPlaying === true && "blackNWhite"}`}
            onClick={() => {
              playCrawlCrane();
            }}
          />
        </div>
      </div>

      <div className="leader-board">
        <button className="heading" />
        <div className="winners">
          {crawlCrane.slice(0, isSeeMore ? 10 : 20).map((user, index) => (
            <LeaderBoardItem user={user} index={index + 1} isClawCrane={true} />
          ))}
        </div>

        <button
          className={isSeeMore ? "see-more" : "see-less"}
          onClick={() => setIsSeeMore((prevState) => !prevState)}
        />
      </div>
      {showDetails && <ClawCraneDetail toggleDetailPopUp={toggleDetailPopUp} />}
      {gamePopUp && (
        <ClawCranePopUp
          toggleGamePopUp={toggleGamePopUp}
          data={rewardData}
          gameErrCode={gameErrCode}
          gameMsg={gameMsg}
        />
      )}
      {showRecords && (
        <ClawCraneRecords toggleRecordsPopup={toggleRecordsPopup} />
      )}
      <p className="rights">ALL RIGHTS RESERVED BY STREAMKAR</p>
    </div>
  );
};

export default ClawCrane;

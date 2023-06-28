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

const ClawCrane = ({}) => {
  const { info, marqueeData, getInfo } = useContext(AppContext);
  const toggleRecordsPopup = () => {
    setShowRecords((prevState) => !prevState);
  };
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
        userId: testUserId,
        token: testToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: 3, playCount: 1 }),
    })
      .then((response) => response.json())
      .then((response) => {
        setIsPlaying(false);
        setGamePopup(true);
        setRewardData(response?.data);
        setGameErrCode(response.errorCode);
        getInfo();
        setGameMsg(response?.msg);
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
          {testData.slice(0, isSeeMore ? 10 : 20).map((user, index) => (
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
      <p className="rights">ALL RIGHTS RESERVED BY STREAMKAR</p>
    </div>
  );
};

export default ClawCrane;

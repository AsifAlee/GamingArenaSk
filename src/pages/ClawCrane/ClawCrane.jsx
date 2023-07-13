import React, { useState } from "react";
import { testData } from "../../testData";
import "../../styles/claw-crane.scss";
// import LeaderBoardItem from "../../components/LeaderBoardItem";
import ClawCraneDetail from "../PopUps/ClawCraneDetail";
import { baseUrl, testToken, testUserId } from "../../service/api";
import Marquee from "react-fast-marquee";
import "../../styles/marquee.scss";
import { useContext } from "react";
import { AppContext } from "../../MyContext";
import ClawCranePopUp from "../PopUps/ClawCrane";
import ClawCraneRecords from "../PopUps/ClawCraneRecords";
// import SvgPlayer from "../../components/SvgPlayer";
import clawCraneSvg from "../../assets/svgs/Claw_Crane_Game.svga";
import unknowUser from "../../assets/images/unknown-user.png";
import LeaderBoardItemWthRewards from "../../components/LeaderBoardItemWthRewards";
import clawCraneIcon from "../../assets/images/claw-crane/claw-point-icon.png";
import TravelSvga from "../../components/Svga2";
// import clawCraneSvgaNew from "../../assets/svgs/Claw-Crane-Game-new.svga";
const ClawCrane = ({}) => {
  const {
    info,
    marqueeData,
    getInfo,
    user,
    leaderBoardData,
    getCrawlLeaderBoardData,
    getRecords,
  } = useContext(AppContext);

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

  const [isSeeMore, setIsSeeMore] = useState(true);
  const [showRecords, setShowRecords] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const playCrawlCrane = () => {
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
      body: JSON.stringify({ type: 3, playCount: 1 }),
    })
      .then((response) => response?.json())
      .then((response) => {
        if (response?.errorCode === 10000004) {
          setGamePopup(true);
          setGameErrCode(response.errorCode);
          setIsDisabled(false);
        } else {
          setRewardData(response?.data);
          setIsPlaying(true);
          setTimeout(() => {
            setIsPlaying(false);
            setGamePopup(true);
            setGameErrCode(response?.errorCode);
            getInfo(false);
            setGameMsg(response?.msg);
            getCrawlLeaderBoardData();
            getRecords(3);
            setIsDisabled(false);
          }, 3000);
        }
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
          <img src={clawCraneIcon} />
          My Claw points:{info?.clawPoints}
        </button>
        <button className="details-btn" onClick={() => toggleDetailPopUp()} />
      </div>
      <Marquee className="marquee">
        {marqueeData?.clawCrane?.map((item) => {
          let rewDescriptions = JSON.parse(item.desc);

          return (
            <div className="marquee-item">
              <img
                src={item?.portrait ? item?.portrait : unknowUser}
                className="user-img"
              />
              <div className="user-details">
                <span className="name">{`${item?.nickname?.slice(0, 6)}`}</span>
                <div>
                  &nbsp; has &nbsp;won &nbsp;
                  {rewDescriptions?.map((rew) => {
                    return (
                      <span>{`${rew?.desc}${
                        rew.count > 1
                          ? `x${rew?.count} days`
                          : `x${rew?.count} day`
                      } `}</span>
                    );
                  })}
                  &nbsp; from Claw Crane.
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
      <div className="crane-game">
        <div className="game">
          {/* {isPlaying === true ? (

            <SvgPlayer src={clawCraneSvg} crane={true} />
          ) : (
            <img src={clawCraneImg} />
          )} */}

          {/* <SvgPlayer src={clawCraneSvg} crane={true} start={isPlaying} /> */}
          <TravelSvga src={clawCraneSvg} start={isPlaying} crane={true} />
          <button
            className={`get-btn ${
              isPlaying === true || (isDisabled === true && "blackNWhite")
            }`}
            onClick={isDisabled ? () => {} : playCrawlCrane}
            disabled={isDisabled || isPlaying}
          />
        </div>
      </div>

      <div className="leader-board">
        <button className="heading" />
        <div className="winners">
          {crawlCrane?.length > 10 ? (
            crawlCrane
              ?.slice(0, isSeeMore ? 10 : 20)
              ?.map((user, index) => (
                <LeaderBoardItemWthRewards
                  user={user}
                  index={index + 1}
                  isClawCrane={true}
                />
              ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: "5vw",
                color: "white",
                fontFamily: "Acme-Regular",
              }}
            >
              No Data Found
            </div>
          )}
        </div>

        {crawlCrane?.length > 10 && (
          <button
            className={isSeeMore ? "see-more" : "see-less"}
            onClick={() => setIsSeeMore((prevState) => !prevState)}
          />
        )}
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

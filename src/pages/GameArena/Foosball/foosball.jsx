import React, { useContext, useState } from "react";
import "../../../styles/foosball.scss";
import game from "../../../assets/images/foosball/foosball-game.png";
import goalIcon from "../../../assets/images/foosball/score-icon.png";
import TabButton from "../../../components/TabButton";
import LeaderBoard from "../Billiards/LeaderBoard";
import { testData } from "../../../testData";
import Slider from "../../../components/Slider";
import rewardsTitle from "../../../assets/images/rewrads-title.png";
import leaderBoardTitle from "../../../assets/images/lb-heading.png";
import today from "../../../assets/images/today.png";
import previousDay from "../../../assets/images/previous-day.png";
import FoosballDetails from "../../PopUps/FoosballDetails";
import FoosballRecords from "../../PopUps/FoosballRecords";
import gamePointIcon from "../../../assets/images/gaming-point-icon.png";
import Marquee from "react-fast-marquee";

import { AppContext } from "../../../MyContext";
import { baseUrl, testToken, testUserId } from "../../../service/api";
import "../../../styles/marquee.scss";

const Foosball = () => {
  const { info, marqueeData } = useContext(AppContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playXbutton, setPlayXButton] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [leaderBoardTabs, setLeaderBoardTabs] = useState({
    today: true,
    yest: false,
  });
  const [detailPopup, setDetailPopup] = useState(false);
  const [recordsPopup, setRecordsPopup] = useState(false);
  const rewards = [
    {
      rank: "Top 1st",
      reward: [
        {
          name: "Game Master frame x3 days",
          img: "beanbag.png",
        },
        {
          name: "Game Master room skin x3 days ",
          img: "beanbag.png",
        },
        {
          name: "3000 beans ",
          img: "beanbag.png",
        },
      ],
    },
    {
      rank: "Top 2nd",
      reward: [
        {
          name: "Game Master frame x2 day",
          img: "beanbag.png",
        },

        {
          name: "3000 beans ",
          img: "beanbag.png",
        },
      ],
    },
    {
      rank: "Top 3rd",
      reward: [
        {
          name: "Game Master room skin x1 days",
          img: "beanbag.png",
        },

        {
          name: "3000 beans ",
          img: "beanbag.png",
        },
      ],
    },
  ];
  const toggleDetailPopUp = () => {
    setDetailPopup((prevState) => !prevState);
  };
  const toggleRecordsPopup = () => {
    setRecordsPopup((prevState) => !prevState);
  };
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
  const onUpCheck = (e) => {
    let max;
    if (/[+-.]/.test(e.key)) {
      setInputValue("");
    } else {
      if (info.gamePoints <= 99 && info.gamePoints > 0) {
        max = info.gamePoints;
      } else if (info.gamePoints > 99) {
        max = 99;
      } else if (info.gamePoints === 0) {
        max = 1;
      }
      let number = inputValue > max ? max : inputValue <= 0 ? "" : inputValue;
      setInputValue(parseInt(number));
    }
  };
  const playGame = () => {
    setIsPlaying(true);
    fetch(`${baseUrl}/api/activity/eidF/playGame`, {
      method: "POST",
      headers: {
        userId: testUserId,
        token: testToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: 2,
        playCount: inputValue,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setIsPlaying(false);
      })
      .catch((error) => {
        console.error("Api error:", error.message);
        setIsPlaying(false);
      });
  };
  const onChangeHandle = (event) => {
    // if (!event.target.value) {
    //   setIsInputZero(true);
    // } else {
    //   setIsInputZero(false);
    // }
    setInputValue(parseInt(event.target.value));
  };
  return (
    <div className="foosball-section">
      <div className="record-details-btns">
        <button className="records-btn" onClick={toggleRecordsPopup} />
        <button className="details-btn" onClick={toggleDetailPopUp} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          // marginTop: "1vw",
        }}
      >
        <div className="game-points">
          <img src={gamePointIcon} />
          <span> My Gaming points:{info?.gamePoints}</span>
        </div>
      </div>
      <Marquee className="marquee">
        {marqueeData?.foosball?.map((item) => (
          <div className="marquee-item">
            <img src={item?.portrait} className="user-img" />
            <div className="user-details">
              <span className="name">
                {`${item?.nickname?.slice(0, 6)}`} &nbsp;{" "}
              </span>
              <span>has ranked and scored x in foosball game</span>
            </div>
          </div>
        ))}
      </Marquee>
      <div className="foosball-game">
        <img src={game} className="play-ground" />
        <div className="play-section">
          <div className="xPlay">
            <button
              className={playXbutton ? "x1" : "x1-off"}
              name="x1"
              onClick={() => setPlayXButton((prevState) => !prevState)}
            />
            <div>
              <input
                className="enter-value"
                type="number"
                onChange={onChangeHandle}
                value={inputValue}
                onKeyUp={onUpCheck}
              />
              <span>Max Value=99</span>
            </div>
          </div>
          <button
            className={`playBtn ${isPlaying && "blackNWhite"}`}
            onClick={playGame}
            disabled={isPlaying}
          />
        </div>
        <div className="balls-potted">
          <img src={goalIcon} />
          <span>Daily Score:0</span>
        </div>
      </div>
      <div className="rest-section">
        <img src={leaderBoardTitle} className="leaderbrd-title" />
        <div className="rewards">
          <img src={rewardsTitle} className="title" />
          <Slider foosball={true} rewards={rewards} eventGifting={false} />
        </div>

        <div className="leaderboard">
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
      {detailPopup && <FoosballDetails toggleDetailPopUp={toggleDetailPopUp} />}
      {recordsPopup && (
        <FoosballRecords toggleRecordsPopup={toggleRecordsPopup} />
      )}

      <p className="rights">ALL RIGHTS RESERVED BY STREAMKAR</p>
    </div>
  );
};

export default Foosball;

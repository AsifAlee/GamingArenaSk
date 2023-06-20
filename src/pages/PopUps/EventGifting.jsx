import React, { useEffect, useState } from "react";
import title from "../../assets/images/popup/event-gifts-title.png";
import bg from "../../assets/images/popup/event-gifting-bg.png";
import taBar from "../../assets/images/lb-tabs-bar.png";
import eventGifting from "../../assets/images/popup/event-gifting-title.png";
import rewardsTitle from "../../assets/images/rewrads-title.png";
import leaderboardTitle from "../../assets/images/lb-heading.png";
import eventGiftTitle from "../../assets/images/popup/event-gifts-title.png";
import Topper from "../../components/Topper";
import { testData } from "../../testData";
import LeaderBoardItem from "../../components/LeaderBoardItem";
import close from "../../assets/images/popup/cross.png";
import "../../styles/event-gifting.scss";
import { baseUrl } from "../../service/api";
import Slider from "../../components/Slider";
const EventGifting = ({ toggleEventGifting }) => {
  const [tabs, setTabs] = useState({
    talent: true,
    gifter: false,
  });
  const [rewardTabs, setRewardTabs] = useState({
    talent: true,
    gifter: false,
  });
  const talentRewards = [
    {
      rank: "1st",
      reward: [
        {
          name: "Rusty Ranger entrance x5 Days",
          img: "rustyRanger.png",
        },
        {
          name: "Game Master frame (New) x5 Days ",
          img: "gameMasterProfileFrame.png",
        },
        {
          name: "3,000,000 gems",
          img: "gems.png",
        },
      ],
    },
    {
      rank: "Top 2nd",
      reward: [
        {
          name: "Rusty Ranger entrance x3 Days",
          img: "rustyRanger.png",
        },

        {
          name: "Game Master frame (New) x3 Days",
          img: "gameMasterProfileFrame.png",
        },
        {
          name: "2,000,000 gems",
          img: "gems.png",
        },
      ],
    },
    {
      rank: "Top 3rd",
      reward: [
        {
          name: "Rusty Ranger entrance x1 Day",
          img: "rustyRanger.png",
        },

        {
          name: "Game Master frame (New) x1 Day",
          img: "gameMasterProfileFrame.png",
        },
        {
          name: "1,000,000 gems",
          img: "gems.png",
        },
      ],
    },
  ];
  const gifterRewards = [
    {
      rank: "1st",
      reward: [
        {
          name: "Solar Flare entrance x 5 Days",
          img: "solar.png",
        },
        {
          name: "Victorious frame x5 Days ",
          img: "beanbag.png",
        },
        {
          name: "3,000,000 Beans",
          img: "beanbag.png",
        },
      ],
    },
    {
      rank: "2nd",
      reward: [
        {
          name: "Solar Flare entrance x 3 Days ",
          img: "solar.png",
        },

        {
          name: "Victorious frame x3 Days",
          img: "beanbag.png",
        },
        {
          name: "2,000,000 Beans",
          img: "beanbag.png",
        },
      ],
    },
    {
      rank: "3rd",
      reward: [
        {
          name: "Solar Flare entrance x 1 Day ",
          img: "solar.png",
        },

        {
          name: "Victorious frame  x1 Day ",
          img: "beanbag.png",
        },
        {
          name: "1,000,000 Beans",
          img: "beanbag.png",
        },
      ],
    },
  ];

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
  const switchRewardTabs = (event) => {
    switch (event.target.name) {
      case "talent":
        setRewardTabs({
          talent: true,
          gifter: false,
        });
        break;
      case "gifter":
        setRewardTabs({
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
          <div className="event-gifts">
            <img src={eventGiftTitle} className="title" />
            <div className="gifts">
              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001665.png"} />
                <div className="gift-name">Empower</div>
              </div>

              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001278.png"} />
                <div className="gift-name">Game World</div>
              </div>

              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001628.png"} />
                <div className="gift-name">Chocolate</div>
              </div>
            </div>
          </div>
          <div className="gifting-rewards">
            <div className="tabs">
              <button
                className={`talents ${!rewardTabs.talent && "blackNWhite"}`}
                name="talent"
                onClick={switchRewardTabs}
              />
              <button
                className={`gifters ${!rewardTabs.gifter && "blackNWhite"}`}
                name="gifter"
                onClick={switchRewardTabs}
              />
            </div>
            <img src={taBar} className="base" />
            <div className="rewards">
              <img className="title" src={rewardsTitle} />
              <Slider
                eventGifting={true}
                rewards={rewardTabs.talent ? talentRewards : gifterRewards}
                foosball={false}
              />
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

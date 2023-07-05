import React, { useEffect, useState } from "react";
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
import { useContext } from "react";
import { AppContext } from "../../MyContext";
import gemIcon from "../../assets/images/gems.png";
import beansIcon from "../../assets/images/bean.png";
const EventGifting = ({ toggleEventGifting }) => {
  const { leaderBoardData } = useContext(AppContext);
  // let { eventGifter, eventRecvr } = leaderBoardData;

  const [selectedData, setSelectedData] = useState(leaderBoardData.eventGifter);

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
          name: "Game Master frame  x5 Days ",
          img: "gameMasterProfileFrame.png",
        },
        {
          name: "3,000,000 gems",
          img: "gems.png",
        },
      ],
      target: "80m",
    },
    {
      rank: "Top 2nd",
      reward: [
        {
          name: "Rusty Ranger entrance x3 Days",
          img: "rustyRanger.png",
        },

        {
          name: "Game Master frame  x3 Days",
          img: "gameMasterProfileFrame.png",
        },
        {
          name: "2,000,000 gems",
          img: "gems.png",
        },
      ],
      target: "70m",
    },
    {
      rank: "Top 3rd",
      reward: [
        {
          name: "Rusty Ranger entrance x1 Day",
          img: "rustyRanger.png",
        },

        {
          name: "Game Master frame  x1 Day",
          img: "gameMasterProfileFrame.png",
        },
        {
          name: "1,000,000 gems",
          img: "gems.png",
        },
      ],
      target: "50m",
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
  // useEffect(() => {
  //   if (rewardTabs.talent) {
  //     setSelectedData(eventRecvr);
  //   } else {
  //     setSelectedData(eventGifter);
  //   }
  // }, [rewardTabs]);
  const [isSeeMore, setIsMore] = useState(false);
  const switchTabs = (event) => {
    switch (event.target.name) {
      case "talent":
        setTabs({
          talent: true,
          gifter: false,
        });
        setSelectedData(leaderBoardData.eventGifter);
        break;
      case "gifter":
        setTabs({
          talent: false,
          gifter: true,
        });
        setSelectedData(leaderBoardData.eventRecvr);
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
      <div className="content">
        <div className="closeBtn">
          <img src={close} onClick={toggleEventGifting} />
        </div>
        <div className="inner-div">
          <img src={eventGifting} className="title" />
          <div className="event-gifts">
            <img src={eventGiftTitle} className="title" />
            <div className="gifts">
              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001665.png"} />
                <div className="gift-name">
                  <p>Empower</p>
                  <p>50,000</p>
                </div>
              </div>

              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001278.png"} />
                <div className="gift-name">
                  <p>Game World</p>
                  <p>25,000</p>
                </div>
              </div>

              <div className="single-gift">
                <img src={baseUrl + "/streamkar/gifts/40001628.png"} />
                <div className="gift-name">
                  <p>Chocolate</p>
                  <p>5,000</p>
                </div>
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
          <div className="event-gft-leader-board">
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
                <Topper
                  index={0}
                  user={selectedData[0]}
                  iconImg={tabs.talent ? gemIcon : beansIcon}
                  estRewards={false}
                />
              </div>
              <div className="top2">
                <Topper
                  notFirstRank={true}
                  index={1}
                  user={selectedData[1]}
                  iconImg={tabs.talent ? gemIcon : beansIcon}
                  estRewards={false}
                />
              </div>
              <div className="top3">
                <Topper
                  notFirstRank={true}
                  index={2}
                  user={selectedData[2]}
                  iconImg={tabs.talent ? gemIcon : beansIcon}
                  estRewards={false}
                />
              </div>
            </div>
            <div className="restWinners">
              {selectedData.slice(3, isSeeMore ? 10 : 20).map((user, index) => (
                <LeaderBoardItem
                  index={index + 4}
                  user={user}
                  isTalent={tabs.talent ? true : false}
                  iconImg={tabs.talent ? gemIcon : beansIcon}
                />
              ))}
            </div>
            {selectedData.length > 10 && (
              <button
                className={isSeeMore ? "see-more" : "see-less"}
                onClick={() => setIsMore((prevState) => !prevState)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGifting;

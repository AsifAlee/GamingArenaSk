import React, { useState } from "react";
import lefArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import "../styles/leaderboard-slider.scss";
import LeaderBoardItemReward from "./LeaderBoardItemReward";
import { getRewardsImage } from "../functions";

const LeaderBoardSlider = ({ rewards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === rewards.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? rewards.length - 1 : prevState - 1
    );
  };
  return (
    <div className="leaderboard-slider">
      {rewards.length > 1 && (
        <img className="left-arrow" src={lefArrow} onClick={prevSlide} />
      )}

      <div className="rew-section">
        {rewards[currentIndex]?.map((item) => (
          <LeaderBoardItemReward
            days={item.count}
            rewImg={getRewardsImage(item.desc)}
            desc={item.desc}
          />
        ))}
      </div>
      {rewards.length > 1 && (
        <img className="right-arrow" src={rightArrow} onClick={nextSlide} />
      )}
    </div>
  );
};

export default LeaderBoardSlider;
// days, rewImg, desc, isClawCrane

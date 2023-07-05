import React, { useEffect, useState } from "react";
import "../styles/slider.scss";
import leftArow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import { getRewardsImage } from "../functions";
import { baseUrl } from "../service/api";

const Slider = ({ rewards, foosball, billiards, eventGifting }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId = null;
  const nextSlide = () => {
    console.log(currentIndex);
    setCurrentIndex((prevState) =>
      prevState === rewards.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? rewards.length - 1 : prevState - 1
    );
  };

  useEffect(() => {
    intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={`slider ${
        (foosball && "foosball-slider") ||
        (eventGifting && "event-gifting-slider")
      }`}
    >
      <img className="left-arrow" src={leftArow} onClick={prevSlide} />
      {billiards && (
        <div className="billiards-reward-item">
          <p className="rank">{rewards[currentIndex]?.rank}</p>
          <img src={getRewardsImage(rewards[currentIndex]?.img)} />

          <p className="text" style={{ textAlign: "center" }}>
            {rewards[currentIndex]?.reward}
          </p>
        </div>
      )}
      {foosball || eventGifting ? (
        <div>
          <p style={{ textAlign: "center" }}>{rewards[currentIndex].rank}</p>
          <div className="foosball-reward-item">
            {rewards[currentIndex].reward.map((rew) => {
              return (
                <div className="single-item">
                  <img src={baseUrl + "/streamkar/rewards/" + rew.img} />
                  <div className="text">
                    <span>{rew.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <p
            style={{ textAlign: "center" }}
          >{`Target: ${rewards[currentIndex].target} `}</p>
        </div>
      ) : (
        ""
      )}

      <img className="right-arrow" src={rightArrow} onClick={nextSlide} />
    </div>
  );
};

export default Slider;

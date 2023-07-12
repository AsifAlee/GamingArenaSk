import React, { useContext, useEffect, useRef, useState } from "react";
import lefArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import "../styles/leaderboard-slider.scss";
import LeaderBoardItemReward from "./LeaderBoardItemReward";
import { getRewardsImage } from "../functions";
import { AppContext } from "../MyContext";

const LeaderBoardSlider = ({ rewards }) => {
  // console.log("current reward:", rewards);
  // let { sliderTimer } = useContext(AppContext);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // // let intervalId = null;

  // const nextSlide = () => {
  //   setCurrentIndex((prevState) =>
  //     prevState === rewards?.length - 1 ? 0 : prevState + 1
  //   );
  // };
  // const prevSlide = () => {
  //   setCurrentIndex((prevState) =>
  //     prevState === 0 ? rewards?.length - 1 : prevState - 1
  //   );
  // };

  // useEffect(() => {
  //   sliderTimer = setInterval(nextSlide, 2000);

  //   return () => {
  //     clearInterval(sliderTimer);
  //   };
  // }, []);

  // return (
  //   <div className="leaderboard-slider">
  //     {rewards.length > 1 && (
  //       <img className="left-arrow" src={lefArrow} onClick={prevSlide} />
  //     )}

  //     <div className="rew-section">
  //       {rewards[currentIndex]?.map((item, index) => (
  //         <LeaderBoardItemReward
  //           days={item?.count}
  //           rewImg={getRewardsImage(item?.desc)}
  //           desc={item?.desc}
  //           key={index}
  //         />
  //       ))}
  //     </div>
  //     {rewards.length > 1 && (
  //       <img className="right-arrow" src={rightArrow} onClick={nextSlide} />
  //     )}
  //   </div>
  // );

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slideInterval = 2000;
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rewards.length);
    }, slideInterval);

    return () => {
      clearInterval(slideTimer);
    };
  }, [rewards.length, slideInterval]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      sliderRef?.current?.classList?.remove("sliding");
    };

    sliderRef?.current?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderRef?.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, []);

  return (
    <div className="slider">
      <div
        ref={sliderRef}
        className="slider-wrapper"
        style={{
          // transform: `translateX(${currentIndex * 50}%)`,
          transition: "transform 0.5s ease",
          display: "flex",
          position: "relative",
          right: "-27vw",
          top: "-5vw",
        }}
      >
        {rewards[currentIndex]?.map((item, index) => (
          <LeaderBoardItemReward
            days={item?.count}
            rewImg={getRewardsImage(item?.desc)}
            desc={item?.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoardSlider;

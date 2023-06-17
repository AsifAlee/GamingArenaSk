import React from "react";
import "../styles/slider.scss";
import leftArow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import top1st from "../assets/images/top-1st.png";

const Slider = ({ rewards }) => {
  return (
    <div className="slider">
      <img className="left-arrow" src={leftArow} />
      <img src={top1st} className="reward-img" />
      <img className="right-arrow" src={rightArrow} />
    </div>
  );
};

export default Slider;

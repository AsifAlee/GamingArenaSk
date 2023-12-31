import React, { useEffect } from "react";
import wheel from "../assets/images/wheel/lucky-wheel-inner-bg.png";
import bottom from "../assets/images/wheel/wheel-bottom.png";
import wheelTop from "../assets/images/wheel/wheel-top.png";
import "../styles/talent-wheel.scss";
import { useState } from "react";

const LuckyWheel = ({
  isRotatingLucky,
  luckyStep,
  rotateDegLucky,
  angleOfRotation,
  isRotatingFinished,
}) => {
  const [angle, setAngle] = useState(0);
  console.log("is rotating lucky:", isRotatingLucky);
  console.log("lucky step:", luckyStep);
  console.log("rotate deg lucky:", rotateDegLucky);

  return (
    <div className="lucky-game">
      <p className="info">25K Beans = 1 Chance</p>
      <div className="spin-wheel">
        <img src={wheelTop} className="top" />
        <img
          src={wheel}
          // className={`lucky-wheel-img ${
          //   isRotatingLucky === false && "rotate-0"
          // }`}

          className={`lucky-wheel-img ${isRotatingLucky === true && "move"}`}
          style={{
            transform: `rotate(${angle}deg)`,
          }}
        />
      </div>
      <img src={bottom} className="bottom" />
    </div>
  );
};

export default LuckyWheel;

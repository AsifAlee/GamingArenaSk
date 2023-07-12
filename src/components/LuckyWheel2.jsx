import React, { useEffect } from "react";
import wheel from "../assets/images/wheel/lucky-wheel-inner-bg.png";
import bottom from "../assets/images/wheel/wheel-bottom.png";
import wheelTop from "../assets/images/wheel/wheel-top.png";
import "../styles/talent-wheel.scss";

const LuckyWheel2 = ({ isRotatingLucky, rotateDegLucky, angleOfRotation }) => {
  console.log("is rotating lucky:", isRotatingLucky);
  console.log("angle of rotation:", angleOfRotation);
  console.log("rotate deg lucky:", rotateDegLucky);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="lucky-game">
      <p className="info">25K Talent points = 1 Chance</p>
      <div className="spin-wheel">
        <img src={wheelTop} className="top" />
        <img
          src={wheel}
          className={`lucky-wheel-img  ${isRotatingLucky && "spinning"}`}
          style={{
            transform: `rotate(${angleOfRotation}deg)`,
          }}
        />
      </div>
      <img src={bottom} className="bottom" />
    </div>
  );
};

export default LuckyWheel2;

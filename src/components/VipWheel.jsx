import React from "react";
import vipWheel from "../assets/images/wheel/vip-wheel-inner.png";
import vipBottom from "../assets/images/wheel/vip-bottom.png";

import vipTop from "../assets/images/wheel/vip-top.png";
import "../styles/talent-wheel.scss";
import "../styles/talent-wheel.scss";
const VipWheel = ({ isRotatingVip, rotateDegVip, angleOfRotation }) => {
  console.log("rotate deg vip:", rotateDegVip);

  return (
    <div className="vip-game">
      <p className="info">100K Beans = 1 Chance</p>
      <div className="spin-wheel">
        <img src={vipTop} className="top" />
        <img
          src={vipWheel}
          className={`vip-wheel-img  ${isRotatingVip && "spinning"}`}
          style={{
            transform: `rotate(${angleOfRotation}deg)`,
          }}
        />
      </div>
      <img src={vipBottom} className="vip-bottom" />
    </div>
  );
};

export default VipWheel;

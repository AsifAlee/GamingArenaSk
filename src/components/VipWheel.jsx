import React from "react";
import vipWheel from "../assets/images/wheel/vip-wheel-inner.png";
import vipBottom from "../assets/images/wheel/vip-bottom.png";

import vipTop from "../assets/images/wheel/vip-top.png";
import "../styles/talent-wheel.scss";
import "../styles/talent-wheel.scss";
const VipWheel = ({ isRotatingVip, vipStep, rotateDegVip }) => {
  return (
    <div className="vip-game">
      <p className="info">25K Beans = 1 Chance</p>
      <div className="spin-wheel">
        <img src={vipTop} className="top" />
        <img
          src={vipWheel}
          className={`vip-wheel-img ${isRotatingVip === false && "rotate-0"}`}
          style={{ transform: `rotate(${vipStep * rotateDegVip}deg)` }}
        />
      </div>
      <img src={vipBottom} className="vip-bottom" />
    </div>
  );
};

export default VipWheel;

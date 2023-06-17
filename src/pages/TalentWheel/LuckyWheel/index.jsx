import React from "react";
import wheelArrow from "../../../assets/images/wheelArrow.png";
import wheel from "../../../assets/images/wheelInner2.png";
import "../../../styles/lucky-wheel.scss";
import { useState } from "react";
const LuckyWheel = () => {
  const [rotateDeg, setRotateDeg] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    // let desiredRewardIndex = Math.floor(Math.random() * 8) + 1;
    // console.log("desired num:", desiredRewardIndex);
    const rewardDegrees = 45;
    const desiredRotation = 8 * rewardDegrees;
    console.log("rotation degrees:", desiredRotation);

    setRotateDeg(desiredRotation);
    setTimeout(() => {
      setIsRotating(false);
    }, 4000);
  };
  return (
    <>
      <div className="lucky-wheel">
        <img src={wheelArrow} className="mark" />
        <img
          src={wheel}
          className={!isRotating ? "rotate-0" : "wheel"}
          style={{ transform: `rotate(${rotateDeg}deg)` }}
        />
        <button onClick={handleClick}>Spin</button>
      </div>
    </>
  );
};

export default LuckyWheel;

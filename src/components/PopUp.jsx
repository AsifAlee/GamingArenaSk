import React, { useEffect } from "react";
import "../styles/popup.scss";
const PopUp = (props) => {
  const {
    children,
    bg,

    popUpHandler,
    isAccPopUp,
    isRewards,
    isGame,
    isMilestone,
  } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="overlay">
      <button className="closeBtn" onClick={popUpHandler}></button>
      <div
        className="background"
        style={{
          backgroundImage: `url(${bg})`,
          minHeight: `${
            isAccPopUp
              ? "74vw"
              : isRewards
              ? "58vw"
              : isGame
              ? "63vw"
              : isMilestone
              ? "83vw"
              : ""
          }`,
          // width: `${
          //   isAccPopUp ? "85%" : isRewards ? "85%" : isMilestone ? "98%" : ""
          // }`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PopUp;

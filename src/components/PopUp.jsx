import React, { useEffect } from "react";
import "../styles/popup.scss";
const PopUp = (props) => {
  const {
    children,
    bg,
    eventGifting,
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
      <div
        className="content"
        style={{
          backgroundImage: `url(${bg})`,
          minHeight: `${
            isAccPopUp
              ? "74vw"
              : isRewards
              ? "58vw"
              : isGame
              ? "85vw"
              : isMilestone
              ? "83vw"
              : ""
          }`,
          width: `${
            eventGifting ? "95%" : isRewards ? "85%" : isMilestone ? "98%" : ""
          }`,
        }}
      >
        <button className="closeBtn" onClick={popUpHandler}></button>
        {children}
      </div>
    </div>
  );
};

export default PopUp;

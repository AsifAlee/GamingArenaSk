import React, { useEffect } from "react";
import closeBtn from "../assets/images/popup/cross.png";
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
    isDetail,
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
        // style={{
        //   backgroundImage: `url(${bg})`,
        //   minHeight: `${
        //     isAccPopUp
        //       ? "74vw"
        //       : isDetail
        //       ? "119vw"
        //       : isGame
        //       ? "85vw"
        //       : isMilestone
        //       ? "83vw"
        //       : ""
        //   }`,
        //   width: `${
        //     eventGifting ? "95%" : isDetail ? "93%" : isMilestone ? "98%" : ""
        //   }`,
        // }}
      >
        <div className="closeBtn">
          <img onClick={popUpHandler} src={closeBtn} />
        </div>
        <div
          className="inner-div"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopUp;

import React from "react";
import "../../styles/popup.scss";
import PopUp from "../../components/PopUp";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import queRecharged from "../../assets/images/popup/cue-recharged.png";
import oops from "../../assets/images/popup/oops.png";
import queIcon from "../../assets/images/ball-potted-icon.png";
import gamePoinIcon from "../../assets/images/gaming-point-icon.png";

const RechargeQue = ({ queCode, toggleQuePopUp, msg }) => {
  return (
    <PopUp bg={bg} popUpHandler={toggleQuePopUp}>
      <div className="billiards">
        <div className="recharge-que">
          <img src={queCode === 0 ? queRecharged : oops} className="title" />
          <div>
            {queCode === 0 ? (
              <span>
                You have successfully recharged{" "}
                <img src={queIcon} className="game-point" /> your cue, now you
                can pot balls & win amazing rewards.
              </span>
            ) : queCode === 10000008 ? (
              <span>
                You don’t have enough Gaming Points{" "}
                <img src={gamePoinIcon} className="game-point" /> to recharge
                your cue right now, send more event gifts to gain gaming points.
              </span>
            ) : (
              msg
            )}
          </div>
        </div>
      </div>
    </PopUp>
  );
};
export default RechargeQue;
// 10000004

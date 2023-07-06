import React from "react";
import PopUp from "../../components/PopUp";
import oops from "../../assets/images/popup/oops.png";
import youRWiner from "../../assets/images/popup/winner.png";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import clawCarneIcon from "../../assets/images/claw-crane/claw-point-icon.png";

import { getRewardsImage } from "../../functions";
import "../../styles/popup.scss";

const ClawCranePopUp = ({ toggleGamePopUp, data, gameErrCode, gameMsg }) => {
  const { rewardDTOList } = data || {};
  return (
    <PopUp popUpHandler={toggleGamePopUp} bg={bg} isGame={true}>
      <div className="billiards">
        <div className="game">
          <img src={gameErrCode === 0 ? youRWiner : oops} className="title" />

          <div className="content">
            {gameErrCode === 0 && (
              <div
                className="game-sucess"
                style={{ position: "relative", bottom: "10vw" }}
              >
                You've successfully grabbed a
                <div className="rewards">
                  {rewardDTOList?.map((item) => (
                    <div className="reward-item">
                      <img src={getRewardsImage(item?.desc)} />
                      {item.desc === "Beans" ? (
                        <span className="text">{`${item.count} Beans`}</span>
                      ) : item.desc === "Gems" ? (
                        <span className="text">{`${item.count} Gems`}</span>
                      ) : (
                        <span className="text">{`${item.desc}  x${
                          item.count > 1
                            ? `${item.count} days`
                            : `${item.count} day`
                        }`}</span>
                      )}
                      {/* <span>{`${item?.count} days`}</span> */}
                    </div>
                  ))}
                </div>
                with the claw.Well done.
              </div>
            )}

            {gameErrCode === 10000004 && (
              <div
                className="game-failed"
                style={{ position: "relative", bottom: "10vw" }}
              >
                You don’t have enough Claw points
                <img src={clawCarneIcon} /> to get item right now, Play more
                games in gaming Arena to get more claw point & come back again.
              </div>
            )}

            {gameErrCode === 30001007 && (
              <div className="game-failed">{gameMsg}</div>
            )}
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default ClawCranePopUp;

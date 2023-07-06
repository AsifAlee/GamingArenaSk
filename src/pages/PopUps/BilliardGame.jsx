import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-pop-title.png";
import oops from "../../assets/images/popup/oops.png";
import whatAshot from "../../assets/images/popup//What-a-shot.png";

import queRecharged from "../../assets/images/popup/cue-recharged.png";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import ballIcon from "../../assets/images/ball-potted-icon.png";
import sampleReward from "../../assets/images/top-1st.png";
import gamePoinIcon from "../../assets/images/gaming-point-icon.png";

import "../../styles/popup.scss";
import { getRewardsImage } from "../../functions";

const BilliardGame = ({ toggleGamePopUp, data, gameErrCode, gameMsg }) => {
  const { rewardDTOList, balls, clawPoints, scores } = data || {};
  return (
    <PopUp popUpHandler={toggleGamePopUp} bg={bg} isGame={true}>
      <div className="billiards">
        <div className="game">
          <img src={gameErrCode === 0 ? whatAshot : oops} className="title" />

          <div className="content">
            {gameErrCode === 0 ? (
              <div
                className="game-sucess"
                style={{ position: "relative", bottom: "10vw" }}
              >
                Congratulations! You have potted
                <div className="claw-points">
                  <span>{balls} balls</span>
                  <img src={ballIcon} />
                </div>
                in billiards game & won
                <div className="rewards">
                  {rewardDTOList?.map((item) => (
                    <div className="reward-item">
                      <img src={getRewardsImage(item?.desc)} />
                      {/* <div> */}
                      {item.desc === "Beans" ? (
                        <span className="text">{`${item.count} Beans`}</span>
                      ) : item.desc === "gems" ? (
                        <span className="text">{`${item.count} Gems`}</span>
                      ) : (
                        <span className="text">{`${item.desc}  x${
                          item.count > 1
                            ? `${item.count} days`
                            : `${item.count} day`
                        }`}</span>
                      )}
                      {/* </div> */}
                      {/* <span>{`${item?.count} days`}</span> */}
                    </div>
                  ))}
                </div>
                {clawPoints > 0 && (
                  <div>
                    <span>& Got</span>
                    <div className="claw-points">{clawPoints} claw points</div>
                    {/* <div>Play again to win more amazing rewards</div> */}
                  </div>
                )}
                <div>Play again to win more amazing rewards</div>
              </div>
            ) : gameErrCode === 10000004 ? (
              <div
                className="game-failed"
                style={{ position: "relative", bottom: "10vw" }}
              >
                You don't have enough Gaming Points
                <span>
                  <img src={gamePoinIcon} />
                </span>
                to play this shot right now, send more event gifts to gain
                gaming points. Come back again to play.
              </div>
            ) : (
              <div>{gameMsg}</div>
            )}
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default BilliardGame;

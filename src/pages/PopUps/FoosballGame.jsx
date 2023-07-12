import React from "react";
import PopUp from "../../components/PopUp";
import thatsAGol from "../../assets/images/popup/thats-a-goal.png";
import oops from "../../assets/images/popup/oops.png";
import betterLuckNext from "../../assets/images/popup/better-luck-title.png";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import gamePoinIcon from "../../assets/images/gaming-point-icon.png";

import "../../styles/popup.scss";
import { getRewardsImage } from "../../functions";

const FoosBallGame = ({ toggleGamePopUp, data, gameErrCode, gameMsg }) => {
  const { rewardDTOList, clawPoints, scores } = data || {};
  return (
    <PopUp popUpHandler={toggleGamePopUp} bg={bg} isGame={true}>
      <div className="billiards">
        <div className="game">
          <img
            src={
              gameErrCode === 0 && scores > 0
                ? thatsAGol
                : gameErrCode === 0 && scores === 0
                ? betterLuckNext
                : oops
            }
            className="title"
          />

          <div className="content">
            {gameErrCode === 0 && scores > 0 ? (
              <div className="game-sucess">
                Congratulations! You have scored
                <div>
                  <span>{scores} </span>
                </div>
                in foosball game & have won
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
                    </div>
                  ))}
                </div>
                {clawPoints > 0 ? (
                  <div>
                    <span>& Got</span>
                    <div className="claw-points">{`${clawPoints} ${
                      clawPoints > 1 ? "claw points" : "claw point"
                    } `}</div>
                  </div>
                ) : (
                  <div></div>
                )}
                <div>Play again to win more amazing rewards</div>
              </div>
            ) : gameErrCode === 0 && scores === 0 ? (
              <div className="game-sucess">
                Oops! It looks like you missed the goal you have scored 0 & have
                won
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
                    </div>
                  ))}
                </div>
                {clawPoints > 0 && (
                  <div>
                    <span>& Got</span>
                    <div className="claw-points">{`${clawPoints} ${
                      clawPoints > 1 ? "claw points" : "claw point"
                    } `}</div>
                  </div>
                )}
                <div>Play again to score this time.</div>
              </div>
            ) : gameErrCode === 10000004 ? (
              <div
                className="game-failed"
                style={{
                  position: "relative",
                  // bottom: "10vw"
                }}
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

export default FoosBallGame;

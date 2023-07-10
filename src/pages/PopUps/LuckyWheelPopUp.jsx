import React from "react";
import PopUp from "../../components/PopUp";
import oops from "../../assets/images/popup/oops.png";
import congrats from "../../assets/images/popup//cong-title.png";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import "../../styles/popup.scss";
import { getRewardsImage } from "../../functions";

const LuckyWheelPopUp = ({
  toggleLuckyPopup,
  data,
  gameErrCode,
  respMsg,
  resetAngle,
}) => {
  const { rewardDTOList } = data || {};
  console.log("fdddddddddddddd");
  return (
    <PopUp
      popUpHandler={toggleLuckyPopup}
      bg={bg}
      isGame={true}
      resetAngle={resetAngle}
    >
      <div className="billiards">
        <div className="game">
          <img
            src={rewardDTOList?.length > 0 ? congrats : oops}
            className="title"
          />

          <div className="content">
            {gameErrCode === 0 ? (
              <div
                className="game-sucess"
                style={{ position: "relative", bottom: "10vw" }}
              >
                {rewardDTOList?.length <= 0 ? (
                  <div>
                    Better luck again, You didn't win any reward this time.
                  </div>
                ) : (
                  <>
                    You have won
                    <div className="rewards">
                      {rewardDTOList?.map((item) => (
                        <div className="reward-item">
                          <img src={getRewardsImage(item?.desc)} />
                          {/* <span>{`${item?.count} days`}</span> */}
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
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : gameErrCode === 10000004 ? (
              <div
                className="game-failed"
                style={{ position: "relative", bottom: "10vw" }}
              >
                Insufficient Points to Spin the wheel, receive more event gifts,
                and Spin again!
              </div>
            ) : (
              respMsg
            )}
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default LuckyWheelPopUp;

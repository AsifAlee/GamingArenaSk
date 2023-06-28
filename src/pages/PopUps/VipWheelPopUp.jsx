import React from "react";
import PopUp from "../../components/PopUp";
import oops from "../../assets/images/popup/oops.png";
import congrats from "../../assets/images/popup//cong-title.png";

import bg from "../../assets/images/popup/foosball-detail-bg.png";

import "../../styles/popup.scss";
import { getRewardsImage } from "../../functions";

const VipWheelPopup = ({ toggleLuckyPopup, data, gameErrCode }) => {
  const { rewardDTOList } = data || {};
  return (
    <PopUp popUpHandler={toggleLuckyPopup} bg={bg} isGame={true}>
      <div className="billiards">
        <div className="game">
          <img
            src={rewardDTOList.length > 0 ? congrats : oops}
            className="title"
          />

          <div className="content">
            {gameErrCode === 0 && (
              <div className="game-sucess">
                {rewardDTOList.length <= 0 ? (
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
                          <span>{`${item?.count} days`}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {gameErrCode === 10000004 && (
              <div className="game-failed">
                Insufficient Points to Spin the wheel, receive more event gifts,
                and Spin again!
              </div>
            )}
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default VipWheelPopup;

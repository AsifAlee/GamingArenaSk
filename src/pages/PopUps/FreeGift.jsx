import React, { useContext, useState } from "react";
import title from "../../assets/images/popup/free-gift-title.png";
import bg from "../../assets/images/popup/claim-gift-bg.png";
import handIcon from "../../assets/images/popup/pointer.png";
import "../../styles/popup.scss";
import { baseUrl, testToken, testUserId } from "../../service/api";
import PopUp from "../../components/PopUp";
import closedGift from "../../assets/images/popup/gift-closed.png";
import openedGift from "../../assets/images/popup/gift-opened.png";
import { AppContext } from "../../MyContext";
import { testRewards } from "../../testData";
import { getRewardsImage } from "../../functions";

const FreeGift = ({ closeGiftPopup }) => {
  const { freeGifts, user } = useContext(AppContext);
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [rewards, setRewards] = useState([]);

  const claimGift = () => {
    fetch(`${baseUrl}/api/activity/gamingArena/claimFreeGifts`, {
      method: "POST",
      headers: {
        // userId: testUserId,
        // token: testToken,
        userId: user?.uid,
        token: user?.token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setIsGiftOpened(true);
        setRewards(response?.data?.rewardDTOList);
        // setRewards(testRewards);
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  return (
    <PopUp
      popUpHandler={closeGiftPopup}
      bg={bg}
      isDetail={true}
      isFreeGift={true}
    >
      <div className="free-gifts">
        <img src={title} className="title" />
        {isGiftOpened === false && (
          <h3 className="heading">
            Click on the gift box to get free Gift from streamkar
          </h3>
        )}

        {isGiftOpened ? (
          <div
            className="gift-opened"
            style={{ top: rewards?.length > 0 && "10vw" }}
          >
            {rewards?.length > 0 ? (
              <div>
                <h4 className="heading">Congratulations! You Have Received </h4>
                <div className="rewards">
                  {rewards?.map((rowItem) => {
                    return (
                      <div className="reward-item">
                        <img
                          src={getRewardsImage(rowItem.desc)}
                          className="giftImg"
                        />
                        <span className="text">{`${rowItem.count} days`}</span>
                      </div>
                    );
                  })}
                </div>

                <h4 className="heading">as a free gift from StreamKar</h4>
              </div>
            ) : (
              <div className="text">
                No rewards today, please come back tomorrow again & get a chance
                to win a free amazing reward.
              </div>
            )}
          </div>
        ) : (
          <div className="gift-box">
            <img
              src={isGiftOpened ? openedGift : closedGift}
              className="gift-img"
              onClick={claimGift}
            />
            <img src={handIcon} className="hand-icon" />
          </div>
        )}
      </div>
    </PopUp>
  );
};

export default FreeGift;

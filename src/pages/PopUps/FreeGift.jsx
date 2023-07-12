import React, { useContext, useState } from "react";
import title from "../../assets/images/popup/free-gift-title.png";
import cong from "../../assets/images/popup/cong-title.png";
import oops from "../../assets/images/popup/oops.png";

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
  let data = [
    {
      type: 6,
      count: 1,
      desc: "Same response",
    },
  ];
  const { freeGifts, user } = useContext(AppContext);
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [rewards, setRewards] = useState([]);
  const [errCode, setErrCode] = useState(null);
  const [errMessga, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [freeGiftTitle, setFreeGiftTitle] = useState("title");

  const claimGift = () => {
    setIsDisabled(true);
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
        setRewards(response?.data);
        setErrCode(response.errorCode);
        setErrorMessage(response.msg);
        if (response.data.length > 0) {
          setFreeGiftTitle("cong");
        } else {
          setFreeGiftTitle("oops");
        }
        setTimeout(() => {
          setIsDisabled(false);
        }, 2000);
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
        <img
          src={
            freeGiftTitle === "title"
              ? title
              : freeGiftTitle === "cong"
              ? cong
              : oops
          }
          className="title"
        />
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
                  {
                    <div className="reward-item">
                      <img
                        src={getRewardsImage(rewards[0]?.desc)}
                        className="giftImg"
                      />
                      <span className="text">
                        {rewards[0]?.desc === "Beans"
                          ? `${rewards[0].count} Beans`
                          : rewards[0]?.desc === `gems`
                          ? `${rewards[0].count} Gems`
                          : rewards[0]?.desc === `XP`
                          ? `${rewards[0].count} XP`
                          : rewards[0]?.count > 1
                          ? `${rewards[0].desc} x${rewards[0].count} days`
                          : `${rewards[0].desc} x${rewards[0].count} day`}
                      </span>
                    </div>
                  }
                </div>

                <h4 className="heading">as a free gift from StreamKar</h4>
              </div>
            ) : rewards?.length === 0 ? (
              <div className="text">
                No rewards today, please come back tomorrow again & get a chance
                to win a free amazing reward.
              </div>
            ) : (
              <div className="text">{errMessga}</div>
            )}
          </div>
        ) : (
          <div className="gift-box">
            {/* <img
              src={isGiftOpened ? openedGift : closedGift}
              className="gift-img"
              onClick={claimGift}
            /> */}
            <button onClick={claimGift} disabled={isDisabled} />
            <img src={handIcon} className="hand-icon" />
          </div>
        )}
      </div>
    </PopUp>
  );
};

export default FreeGift;
// : errCode === 10000007 ? (
//   <div className="text">{errMessga}</div>
// )

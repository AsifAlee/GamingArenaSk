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

const FreeGift = ({}) => {
  const { freeGifts } = useContext(AppContext);
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const claimGift = () => {
    fetch(`${baseUrl}/api/activity/gamingArena/claimFreeGifts`, {
      method: "POST",
      headers: {
        userId: testUserId,
        token: testToken,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setIsGiftOpened(true);
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  return (
    <PopUp popUpHandler={freeGifts.closeFreeGift} bg={bg} isDetail={true}>
      <div className="free-gifts">
        <img src={title} className="title" />
        <h3 className="heading">
          Click on the gift box to get free Gift from streamkar
        </h3>
        <div className="gift-content">
          <img
            src={isGiftOpened ? openedGift : closedGift}
            className="gift-img"
            onClick={claimGift}
          />
          <img src={handIcon} className="hand-icon" />
        </div>
      </div>
    </PopUp>
  );
};

export default FreeGift;

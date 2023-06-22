import React from "react";
import title from "../../assets/images/popup/billiards-pop-title.png";
import bg from "../../assets/images/popup/billiards-detail-bg.png";
import "../../styles/popup.scss";
import { baseUrl } from "../../service/api";

const FreeGift = () => {
  return (
    <PopUp popUpHandler={toggleDetailPopUp} bg={bg} isDetail={true}>
      <div className="free-gifts"></div>
    </PopUp>
  );
};

export default FreeGift;

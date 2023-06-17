import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-pop-title.png";
import bg from "../../assets/images/popup/billiards-detail-bg.png";
import "../../styles/popup.scss";

const BilliardsDetail = ({ toggleDetailPopUp }) => {
  return (
    <PopUp popUpHandler={toggleDetailPopUp} bg={bg}>
      <div className="billiards details">
        <img src={title} className="title" />
        <h3 className="heading">BILLIARDS DETAILS</h3>
      </div>
    </PopUp>
  );
};

export default BilliardsDetail;

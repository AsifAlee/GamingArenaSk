import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-rec-title.png";
import bg from "../../assets/images/popup/billiards-rec-bg.png";
import "../../styles/popup.scss";

const BillardsRecords = ({ toggleRecordsPopup }) => {
  return (
    <PopUp popUpHandler={toggleRecordsPopup} bg={bg}>
      <div className="billiards">
        <div className="records">
          <img src={title} className="title" />
          <h3 className="heading">BILLIARDS RECORDS</h3>
        </div>
      </div>
    </PopUp>
  );
};

export default BillardsRecords;

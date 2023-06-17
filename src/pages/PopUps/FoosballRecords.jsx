import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-pop-title.png";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import "../../styles/popup.scss";

const FoosballRecords = ({ toggleRecordsPopup }) => {
  return (
    <PopUp popUpHandler={toggleRecordsPopup} bg={bg}>
      <div className="foosball">
        <div className="records">
          <img src={title} className="title" />
          <h3 className="heading">FOOSBALL RECORDS</h3>
        </div>
      </div>
    </PopUp>
  );
};

export default FoosballRecords;

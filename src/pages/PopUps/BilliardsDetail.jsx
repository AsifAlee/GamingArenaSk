import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-pop-title.png";
import bg from "../../assets/images/popup/billiards-detail-bg.png";
import "../../styles/popup.scss";

const BilliardsDetail = ({ toggleDetailPopUp }) => {
  return (
    <PopUp popUpHandler={toggleDetailPopUp} bg={bg} isDetail={true}>
      <div className="billiards">
        <div className="details">
          <img src={title} className="title" />
          <h3 className="heading">BILLIARDS DETAILS</h3>
          <div className="content">
            <table>
              <tr>
                <th>Button Name</th>
                <th>Game Points Required </th>
                <th>Balls Potted</th>
                <th>Rewards</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default BilliardsDetail;

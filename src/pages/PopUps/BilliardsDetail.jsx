import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-pop-title.png";
import bg from "../../assets/images/popup/billiards-detail-bg.png";
import "../../styles/popup.scss";
import { baseUrl } from "../../service/api";

const BilliardsDetail = ({ toggleDetailPopUp }) => {
  return (
    <PopUp popUpHandler={toggleDetailPopUp} bg={bg} isDetail={true}>
      <div className="billiards">
        <div className="details">
          <img src={title} className="title" />
          <h3 className="heading">BILLIARDS DETAILS</h3>
          <div className="inner-content">
            <table>
              <tr className="head">
                <th>Button Name</th>
                <th>Game Points Required </th>

                <th style={{ width: "41vw" }}>Rewards</th>
              </tr>
              <tr className="reward-row">
                <td>Play</td>
                <td>20,000</td>

                <td>
                  <div
                    style={{
                      height: "37vw",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5vw",
                      paddingLeft: "1vw",
                    }}
                  >
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/skSamuraiFrame.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/nightShadow.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/moonKnightFrame.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/desertNight.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/pirateFrame.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/sailorFrame.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/seaWolfRoomSkin.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/beanbag.png"}
                        className="giftImg"
                      />
                      <span className="text">2000 beans</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/neonRoomSkin.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/mysterioFrame.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/40001313.png"}
                        className="giftImg"
                      />
                      <span className="text">1 day</span>
                    </div>
                  </div>
                </td>
              </tr>
            </table>

            <table className="claw-points">
              <tr className="head">
                <th>Button Name</th>
                <th>Game Points Required </th>
                <th>Claw Points</th>
                <th>Possibility</th>
              </tr>
              <tr>
                <td>Play</td>
                <td>20,000</td>
                <td>1</td>
                <td>50%</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ borderTop: "1px solid" }}>0</td>
                <td style={{ borderTop: "1px solid" }}>50%</td>
              </tr>
            </table>
            <table className="que">
              <tr className="head">
                <th>Button Name</th>
                <th>Game Points Required</th>
              </tr>
              <tr>
                <td>Recharge Que</td>
                <td>5000</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default BilliardsDetail;

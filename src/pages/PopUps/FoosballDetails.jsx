import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-pop-title.png";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import "../../styles/popup.scss";
import { baseUrl } from "../../service/api";
const FoosballDetails = ({ toggleDetailPopUp }) => {
  return (
    <PopUp popUpHandler={toggleDetailPopUp} bg={bg} isDetail={true}>
      <div className="billiards">
        <div className="details">
          <img src={title} className="title" />
          <h3 className="heading">FOOSBALL DETAILS</h3>
          <div className="inner-content">
            <table>
              <tr className="head">
                <th>Button Name</th>
                <th>Game Points Required </th>
                <th>Score</th>

                <th style={{ width: "41vw" }}>Rewards</th>
              </tr>
              <tr className="reward-row">
                <td>Play</td>
                <td>20,000</td>
                <th>0 or 1</th>

                <td>
                  <div
                    style={{
                      // height: "46vw",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5vw",
                      paddingLeft: "1vw",
                      // overflowY: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/blazingFrame.png"}
                        className="giftImg"
                      />
                      <span className="text">Blazing Frame x1 day </span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={
                          baseUrl + "/streamkar/rewards/desertnightFrame.png"
                        }
                        className="giftImg"
                      />
                      <span className="text">Desert Knight frame x1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/moonKnightSkin.png"}
                        className="giftImg"
                      />
                      <span className="text">Moon Knight room skin x1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/beanbag.png"}
                        className="giftImg"
                      />
                      <span className="text">1000 Beans</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={
                          baseUrl + "/streamkar/rewards/victoriousRoomSkin.png"
                        }
                        className="giftImg"
                      />
                      <span className="text">Victorious Room skin x1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/battleSkin.png"}
                        className="giftImg"
                      />
                      <span className="text">Battle room skin x1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/seawolfFrame.png"}
                        className="giftImg"
                      />
                      <span className="text">Sea Wolf frame x1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/pirateRoomSkin.png"}
                        className="giftImg"
                      />
                      <span className="text">Pirate room skin x1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/sailorRoomSkin.png"}
                        className="giftImg"
                      />
                      <span className="text">Sailor room skin x1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/mavenFrame.png"}
                        className="giftImg"
                      />
                      <span className="text">Maven frame x1 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/combatSkin.png"}
                        className="giftImg"
                      />
                      <span className="text">Combat room skin x1 day</span>
                    </div>
                  </div>
                </td>
              </tr>
            </table>

            {/* <table className="claw-points">
              <tr className="head">
                <th>Button Name</th>
                <th>Game Points Required </th>
                <th>Score detail</th>
                <th>Claw Points</th>
                <th>Possibility</th>
              </tr>
              <tr>
                <td rowSpan={2}>Play</td>
                <td rowSpan={2}>20,000</td>
                <td>1 or 0</td>
                <td>1</td>
                <td>50%</td>
              </tr>
              <tr>
              
                <td style={{ borderTop: "1px solid" }}>0</td>
                <td style={{ borderTop: "1px solid" }}>50%</td>
              </tr>
            </table> */}
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default FoosballDetails;

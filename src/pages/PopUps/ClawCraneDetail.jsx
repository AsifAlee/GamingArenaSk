import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-pop-title.png";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import "../../styles/popup.scss";
import { baseUrl } from "../../service/api";

const ClawCraneDetail = ({ toggleDetailPopUp }) => {
  return (
    <PopUp popUpHandler={toggleDetailPopUp} bg={bg} isDetail={true}>
      <div className="billiards">
        <div className="details">
          <img src={title} className="title" />
          <h3 className="heading">CLAW CRANE DETAILS</h3>
          <div className="inner-content">
            <table>
              <tr className="head">
                <th>Button Name</th>
                <th>Claw Points Required </th>

                <th style={{ width: "41vw" }}>Rewards</th>
              </tr>
              <tr className="reward-row">
                <td>Get Item</td>
                <td>10</td>

                <td>
                  <div
                    style={{
                      // height: "37vw",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5vw",
                      paddingLeft: "1vw",
                      overflowY: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="reward-item">
                      <img
                        src={
                          baseUrl + "/streamkar/rewards/victoriousRoomSkin.png"
                        }
                        className="giftImg"
                      />
                      <span className="text">
                        Victorious Room skin (New) x1 day
                      </span>
                    </div>

                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/spaceship.png"}
                        className="giftImg"
                      />
                      <span className="text">Spaceship entrance x2 days</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/victorySlide.png"}
                        className="giftImg"
                      />
                      <span className="text">Victory slide x2 days</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/phantom.png"}
                        className="giftImg"
                      />
                      <span className="text">Phantom entrance x2 days</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/phoenix.png"}
                        className="giftImg"
                      />
                      <span className="text">Phoenix entrance x2 day</span>
                    </div>
                    <div className="reward-item">
                      <img
                        src={baseUrl + "/streamkar/rewards/victoriousFrame.png"}
                        className="giftImg"
                      />
                      <span className="text">
                        Victorious frame (New) x1 day
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default ClawCraneDetail;

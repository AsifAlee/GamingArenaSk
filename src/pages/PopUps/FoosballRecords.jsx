import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-rec-title.png";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import "../../styles/popup.scss";
import { getRewardsImage } from "../../functions";
import { useContext } from "react";
import { AppContext } from "../../MyContext";

const FoosballRecords = ({ toggleRecordsPopup }) => {
  const { records } = useContext(AppContext);

  return (
    <PopUp popUpHandler={toggleRecordsPopup} bg={bg}>
      <div className="billiards">
        <div className="records">
          <img src={title} className="title" />
          <div className="inner-content">
            <table>
              <tr className="head">
                <th>Time</th>
                <th>Item Win </th>

                <th style={{ width: "41vw" }}>Rewards</th>
              </tr>
              {records.foosball.map((rec) => (
                <tr className="reward-row">
                  <td>{rec?.time.split("T")[0]}</td>
                  <td>{rec?.score}</td>

                  <td>
                    <div
                      style={{
                        height: "37vw",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "2.5vw",
                        overflowY: "auto",
                      }}
                    >
                      {rec.rewardDTOList?.map((item) => (
                        <div className="reward-item">
                          <img
                            src={getRewardsImage(item?.desc)}
                            className="giftImg"
                          />
                          <span className="text">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default FoosballRecords;

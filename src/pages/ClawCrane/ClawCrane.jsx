import React, { useState } from "react";
import { testData } from "../../testData";
import "../../styles/claw-crane.scss";
import LeaderBoardItem from "../../components/LeaderBoardItem";
import ClawCraneDetail from "../PopUps/ClawCraneDetail";

const ClawCrane = ({}) => {
  const toggleRecordsPopup = () => {
    setShowRecords((prevState) => !prevState);
  };
  const toggleDetailPopUp = () => {
    setShowDetails((prevState) => !prevState);
  };
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [getItem, setGetItem] = useState(false);
  const [showRecords, setShowRecords] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="claw-crane">
      <div className="record-details-btns">
        <button className="records-btn" onClick={() => toggleRecordsPopup()} />
        <button className="game-points">My Gaming points:xx</button>
        <button className="details-btn" onClick={() => toggleDetailPopUp()} />
      </div>
      <div className="crane-game">
        <div className="game">
          <button
            className={`get-btn ${getItem === false && "blackNWhite"}`}
            onClick={() => setGetItem((prevState) => !prevState)}
          />
        </div>
      </div>

      <div className="leader-board">
        <button className="heading" />
        <div className="winners">
          {testData.slice(0, isSeeMore ? 10 : 20).map((user, index) => (
            <LeaderBoardItem user={user} index={index + 1} isClawCrane={true} />
          ))}
        </div>

        <button
          className={isSeeMore ? "see-more" : "see-less"}
          onClick={() => setIsSeeMore((prevState) => !prevState)}
        />
      </div>
      {showDetails && <ClawCraneDetail toggleDetailPopUp={toggleDetailPopUp} />}
      <p className="rights">ALL RIGHTS RESERVED BY STREAMKAR</p>
    </div>
  );
};

export default ClawCrane;

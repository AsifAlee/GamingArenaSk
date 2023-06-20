import React, { useState } from "react";
import "../../styles/claw-crane.scss";

const ClawCrane = () => {
  const toggleRecordsPopup = () => {};
  const toggleDetailPopUp = () => {};
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [getItem, setGetItem] = useState(false);
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
        <div></div>
        <button
          className={isSeeMore ? "see-more" : "see-less"}
          onClick={() => setIsSeeMore((prevState) => !prevState)}
        />
      </div>
    </div>
  );
};

export default ClawCrane;

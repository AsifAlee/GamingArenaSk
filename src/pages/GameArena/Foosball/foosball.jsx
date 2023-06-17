import React from "react";
import "../../../styles/foosball.scss";
const Foosball = () => {
  return (
    <div className="billiards-section">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "1vw",
        }}
      >
        <button className="game-points">My Gaming points:xx</button>
      </div>
      <div className="record-details-btns">
        <button className="records-btn" />
        <button className="details-btn" />
      </div>
    </div>
  );
};

export default Foosball;

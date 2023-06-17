import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/billiards-pop-title.png";
import bg from "../../assets/images/popup/foosball-detail-bg.png";
import ballIcon from "../../assets/images/ball-potted-icon.png";
import sampleReward from "../../assets/images/top-1st.png";
import "../../styles/popup.scss";

const BilliardGame = ({ toggleGamePopUp }) => {
  return (
    <PopUp popUpHandler={toggleGamePopUp} bg={bg} isGame={true}>
      <div className="billiards">
        <div className="game">
          <img src={title} className="title" />

          <div className="content">
            Congratulations You have potted
            <div className="claw-points">
              <span>1234 points</span>
              <img src={ballIcon} />
            </div>
            in billiards game & won
            <div className="reward">
              <img src={sampleReward} />
              <span>Reward Name</span>
            </div>
            <span>& Got</span>
            <div className="claw-points">1234 claw points</div>
            <div>Play again to win more amazing rewards</div>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default BilliardGame;

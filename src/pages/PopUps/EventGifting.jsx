import React from "react";
import PopUp from "../../components/PopUp";
import title from "../../assets/images/popup/event-gifts-title.png";
import bg from "../../assets/images/popup/event-gifting-bg.png";
import "../../styles/popup.scss";

const EventGifting = ({ toggleEventGifting }) => {
  return (
    <PopUp popUpHandler={toggleEventGifting} bg={bg}>
      <div className="event-gifting-popup">
        <img src={title} className="title" />
        <h3 className="heading">Event Gifting</h3>
      </div>
    </PopUp>
  );
};

export default EventGifting;

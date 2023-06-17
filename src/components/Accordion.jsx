import React, { useState } from "react";
import arrow from "../assets/images/popup/down-arrow.png";
import "../styles/accordion.scss";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(props.defaultOpen);
  const { title, children } = props;

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <div className="accordion-title">
          <span className="text">{title}</span>
          {/* <span className={isOpen ? "down-chevron" : "right-chevron"}></span> */}
          <img src={arrow} className={isOpen ? "down-arrow" : "right-arrow"} />
        </div>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
}

export default Accordion;

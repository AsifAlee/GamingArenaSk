import { useContext, useState } from "react";
import "./App.scss";
import GamingZone from "./pages/GameArena/GamingZone";
import Guide from "./pages/PopUps/Guide";
import { AppContext } from "./MyContext";
import EventGifting from "./pages/PopUps/EventGifting";
import ClawCrane from "./pages/ClawCrane/ClawCrane";
import TalentWheel from "./pages/TalentWheel/TalentWheel";
import FreeGift from "./pages/PopUps/FreeGift";
import LanguageDropdown from "./components/LanguageDropDown";

function App() {
  const {
    toggleGuidePopup,
    guidePopup,
    freeGifts,
    selectedLng,
    changeLanguage,
  } = useContext(AppContext);
  const [eventGifting, setEventGifting] = useState(false);
  const [mainTabs, setMainTabs] = useState({
    gamingZone: true,
    clawCrane: false,
    luckyWheel: false,
  });
  const [showGiftPopup, setShowGiftPopup] = useState(true);
  const closeGiftPopup = () => {
    setShowGiftPopup(false);
  };

  const toggleEventGifting = () => {
    setEventGifting((prevState) => !prevState);
  };
  const switchMainTab = (event) => {
    switch (event.target.name) {
      case "gaming-zone":
        setMainTabs({ gamingZone: true, clawCrane: false, luckyWheel: false });
        break;
      case "claw-crane":
        setMainTabs({ gamingZone: false, clawCrane: true, luckyWheel: false });
        break;
      case "lucky-wheel":
        setMainTabs({ gamingZone: false, clawCrane: false, luckyWheel: true });
        break;
    }
  };

  return (
    <div className="App">
      <div className="header">
        <button className="guide-btn" onClick={toggleGuidePopup} />
        <LanguageDropdown
          selectedLanguage={selectedLng}
          changeLanguage={changeLanguage}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="event-gifting" onClick={toggleEventGifting} />
      </div>
      <div className="main-tabs">
        <button
          className={mainTabs.gamingZone ? "gaming-zone" : "gaming-zone-off"}
          name="gaming-zone"
          onClick={switchMainTab}
        />
        <button
          className={mainTabs.clawCrane ? "claw-crane" : "claw-crane-off"}
          name="claw-crane"
          onClick={switchMainTab}
        />
        <button
          className={mainTabs.luckyWheel ? "lucky-wheel" : "lucky-wheel-off"}
          name="lucky-wheel"
          onClick={switchMainTab}
        />
      </div>
      {guidePopup && <Guide />}
      {eventGifting && <EventGifting toggleEventGifting={toggleEventGifting} />}

      {mainTabs.gamingZone ? (
        <GamingZone />
      ) : mainTabs.clawCrane ? (
        <ClawCrane />
      ) : (
        <TalentWheel />
      )}
      {freeGifts.isClaimed === false &&
        showGiftPopup &&
        freeGifts.isApiCalled === true && (
          <FreeGift closeGiftPopup={closeGiftPopup} />
        )}
    </div>
  );
}

export default App;

import { useContext, useState } from "react";
import "./App.scss";
import LuckyWheel from "./pages/TalentWheel/LuckyWheel";
import GamingZone from "./pages/GameArena/GamingZone";
import Guide from "./pages/PopUps/Guide";
import { AppContext } from "./MyContext";

function App() {
  const { toggleGuidePopup, guidePopup } = useContext(AppContext);
  const [mainTabs, setMainTabs] = useState({
    gamingZone: true,
    clawCrane: false,
    luckyWheel: false,
  });
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
        <button className="guide-btn" onClick={() => toggleGuidePopup()} />
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button className="event-gifting" />
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

      {mainTabs.gamingZone && <GamingZone />}
    </div>
  );
}

export default App;

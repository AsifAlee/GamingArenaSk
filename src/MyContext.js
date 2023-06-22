import { useEffect, useState } from "react";
import { createContext } from "react";

import { baseUrl, testUserId } from "./service/api";
const AppContext = createContext("");

const EventProvider = ({ children }) => {
  const [info, setInfo] = useState({
    gamePoints: 0,
  });
  const [freeGifts, setFreeGifts] = useState({
    isClaimed: false,
  });
  const [guidePopup, setGuidePopup] = useState(false);
  const toggleGuidePopup = () => {
    setGuidePopup((prevState) => !prevState);
  };

  const getInfo = () => {
    fetch(
      `${baseUrl}/api/activity/gamingArena/getUserEventInfo?userId=${testUserId}`
    ).then((response) =>
      response
        .json()
        .then((response) => {
          setInfo({
            ...info,
            gamePoints: response.data.gamePoints,
          });
          setFreeGifts({
            ...freeGifts,
            isClaimed: response.data.claimDailyFreeGifts,
          });
        })
        .catch((error) => console.error("api error:", error.message))
    );
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <AppContext.Provider
      value={{
        guidePopup: guidePopup,
        toggleGuidePopup: toggleGuidePopup,
        info: info,
        freeGifts: freeGifts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { EventProvider, AppContext };

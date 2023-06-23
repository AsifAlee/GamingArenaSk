import { useEffect, useState } from "react";
import { createContext } from "react";

import { baseUrl, testUserId } from "./service/api";
const AppContext = createContext("");

const EventProvider = ({ children }) => {
  const [info, setInfo] = useState({
    gamePoints: 0,
  });
  const closeFreeGift = () => {
    setFreeGifts({ ...freeGifts, isClaimed: true });
  };
  const [freeGifts, setFreeGifts] = useState({
    isClaimed: false,
    closeFreeGift,
  });
  const [leaderBoardData, setLeaderBoardData] = useState({
    billiards: [],
    foosball: [],
    eventGifter: [],
    eventRecvr: [],
    talentWheel: [],
    crawlCrane: [],
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
  const getBilliardsLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/gamingArena/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=5&pageNum=1&pageSize=10&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {})
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getFoosballLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/gamingArena/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=6&pageNum=1&pageSize=10&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {})
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getCrawlLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/gamingArena/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=7&pageNum=1&pageSize=10&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {})
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getEventSendLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/gamingArena/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=8&pageNum=1&pageSize=10&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {})
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getEventRecvLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/gamingArena/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=9&pageNum=1&pageSize=10&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {})
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getWheelLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/gamingArena/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=5&pageNum=1&pageSize=10&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {})
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getRecords = (type) => {
    fetch(
      `${baseUrl}/api/activity/gamingArena/getRecord?userId=${testUserId}&pageNum=10&pageSize=20&type=${type}`
    )
      .then((response) => response.json())
      .then((response) => {})
      .catch((error) => console.error("api error:", error));
  };

  useEffect(() => {
    getInfo();
    getBilliardsLeaderBoardData();
    getFoosballLeaderBoardData();
    getCrawlLeaderBoardData();
    getEventSendLeaderBoardData();
    getEventRecvLeaderBoardData();
    getWheelLeaderBoardData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        guidePopup: guidePopup,
        toggleGuidePopup: toggleGuidePopup,
        info: info,
        freeGifts: freeGifts,
        leaderBoardData: leaderBoardData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { EventProvider, AppContext };

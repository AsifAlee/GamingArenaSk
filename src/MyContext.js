import { useEffect, useState } from "react";
import { createContext } from "react";

import { baseUrl, testUserId } from "./service/api";
const AppContext = createContext("");

const EventProvider = ({ children }) => {
  const [info, setInfo] = useState({
    gamePoints: 0,
    rechargeCue: false,
    totalBillardsScore: 0,
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
  const [marqueeData, setMarqueeData] = useState({
    billiards: [],
    foosball: [],
    clawCrane: [],
    vipWheel: [],
  });
  const [selectedLng, setSelectedLng] = useState(1);
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
            rechargeCue: response.data.rechargeCue,
            totalBillardsScore: response.data.balls,
            totalFoosballScore: response.data.foosballScores,
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

  const getMarqueeData = (rankIndex) => {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20230714_gamingArena&rankIndex=${rankIndex}&pageNum=1&pageSize=20`
    )
      .then((response) => response.json())
      .then((response) => {
        if (rankIndex === 1) {
          setMarqueeData((prevState) => ({
            ...prevState,
            billiards: response.data.list,
          }));
        }
        if (rankIndex === 2) {
          setMarqueeData((prevState) => ({
            ...prevState,
            foosball: response.data.list,
          }));
        }
        if (rankIndex === 3) {
          setMarqueeData((prevState) => ({
            ...prevState,
            clawCrane: response.data.list,
          }));
        }
        if (rankIndex === 4) {
          setMarqueeData((prevState) => ({
            ...prevState,
            vipWheel: response.data.list,
          }));
        }
      })
      .catch((error) => {
        console.error("api error", error.message);
      });
  };
  const changeLanguage = (index) => {
    setSelectedLng(index);
  };

  useEffect(() => {
    getInfo();
    getBilliardsLeaderBoardData();
    getFoosballLeaderBoardData();
    getCrawlLeaderBoardData();
    getEventSendLeaderBoardData();
    getEventRecvLeaderBoardData();
    getWheelLeaderBoardData();
    getMarqueeData(1);
    getMarqueeData(2);
    getMarqueeData(3);
    getMarqueeData(4);
  }, []);

  return (
    <AppContext.Provider
      value={{
        guidePopup: guidePopup,
        toggleGuidePopup: toggleGuidePopup,
        info: info,
        freeGifts: freeGifts,
        leaderBoardData: leaderBoardData,
        marqueeData: marqueeData,
        selectedLng: selectedLng,
        changeLanguage: changeLanguage,
        getInfo: getInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { EventProvider, AppContext };

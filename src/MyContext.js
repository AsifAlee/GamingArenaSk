import { useEffect, useState } from "react";
import { createContext } from "react";

import { baseUrl, testUserId } from "./service/api";
const AppContext = createContext("");

const EventProvider = ({ children }) => {
  const [info, setInfo] = useState({
    gamePoints: 0,
    rechargeCue: false,
    totalBillardsScore: 0,
    dayIndex: 0,
    beanPotList: [],
    sendBeans: 0,
    clawPoints: 0,
    totalFoosballScore: 0,
    receiveBeans: 0,
  });
  const [user, setUser] = useState({
    uid: 0,
    token: undefined,
  });
  const [records, setRecords] = useState({
    billiards: [],
    foosball: [],
    clawCrane: [],
  });

  const [freeGifts, setFreeGifts] = useState({
    isClaimed: false,
  });
  const [leaderBoardData, setLeaderBoardData] = useState({
    billiards: [],
    billiardsYest: [],
    foosballYest: [],
    foosball: [],
    foosballYest: [],

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
      `${baseUrl}/api/activity/gamingArena/getUserEventInfo?userId=${user.uid}`
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
            dayIndex: response?.data?.dayIndex,
            beanPotList: response?.data.beanPotList,
            sendBeans: response?.data?.sendBeans,
            receiveBeans: response?.data?.receiveBeans,
            clawPoints: response?.data?.clawPoints,
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
      `${baseUrl}/api/activity/eidF/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=11&&dayIndex=${info?.dayIndex}&pageNum=1&pageSize=20`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderBoardData((prevState) => ({
          ...prevState,
          billiards: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getBilliardsLeaderBoardDataYest = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=11&pageNum=1&pageSize=10&dayIndex=${
        info?.dayIndex - 1
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderBoardData((prevState) => ({
          ...prevState,
          billiardsYest: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getFoosballLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=12&pageNum=1&pageSize=10&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderBoardData((prevState) => ({
          ...prevState,
          foosball: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };

  const getFoosballLeaderBoardDataYest = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=12&pageNum=1&pageSize=10&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderBoardData((prevState) => ({
          ...prevState,
          foosballYest: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getCrawlLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20230714_gamingArena&rankIndex=3&pageNum=1&pageSize=20`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderBoardData((prevState) => ({
          ...prevState,
          crawlCrane: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getEventSendLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=13&pageNum=1&pageSize=20&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderBoardData((prevState) => ({
          ...prevState,
          eventGifter: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getEventRecvLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfo?eventDesc=20230714_gamingArena&rankIndex=14&pageNum=1&pageSize=20&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderBoardData((prevState) => ({
          ...prevState,
          eventRecvr: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getWheelLeaderBoardData = () => {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20230714_gamingArena&rankIndex=4&pageNum=1&pageSize=20&dayIndex=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderBoardData((prevState) => ({
          ...prevState,
          talentWheel: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getRecords = (type) => {
    fetch(
      `${baseUrl}/api/activity/gamingArena/getRecord?userId=${user.uid}&pageNum=10&pageSize=20&type=${type}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (type === 1)
          setRecords((prevRec) => ({
            ...prevRec,
            billiards: response?.data?.list,
          }));
        else if (type === 2) {
          setRecords((prevRec) => ({
            ...prevRec,
            foosball: response?.data?.list,
          }));
        } else {
          setRecords((prevRec) => ({
            ...prevRec,
            clawCrane: response?.data?.list,
          }));
        }
      })
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
    getBilliardsLeaderBoardDataYest();
    getFoosballLeaderBoardData();
    getFoosballLeaderBoardDataYest();
    getCrawlLeaderBoardData();
    getEventSendLeaderBoardData();
    getEventRecvLeaderBoardData();
    getWheelLeaderBoardData();
    getMarqueeData(1);
    getMarqueeData(2);
    getMarqueeData(3);
    getMarqueeData(4);
    getRecords(1);
    getRecords(2);
    getRecords(3);
  }, [info.dayIndex, user.uid]);

  useEffect(() => {
    try {
      window.phone.getUserInfo(function (userInfo) {
        setUser({
          uid: userInfo.userId > 0 ? userInfo.userId : 0,
          token: userInfo.token != "" ? userInfo.token : null,
        });
      });
    } catch (_error) {
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
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
        user: user,
        records: records,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { EventProvider, AppContext };

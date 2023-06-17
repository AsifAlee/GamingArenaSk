import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext("");

const EventProvider = ({ children }) => {
  const [guidePopup, setGuidePopup] = useState(false);
  const toggleGuidePopup = () => {
    setGuidePopup((prevState) => !prevState);
  };

  return (
    <AppContext.Provider
      value={{ guidePopup: guidePopup, toggleGuidePopup: toggleGuidePopup }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { EventProvider, AppContext };

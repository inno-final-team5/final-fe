import React from "react";
import { createContext, useState } from "react";

const MainBadgeContext = createContext();

export const MainBadgeProvider = ({ children }) => {
  const initialBadge = localStorage.getItem("badgeIcon");
  const [mainBadge, setMainBadge] = useState(initialBadge);
  return (
    <MainBadgeContext.Provider value={{ mainBadge, setMainBadge }}>
      {children}
    </MainBadgeContext.Provider>
  );
};

export default MainBadgeContext;

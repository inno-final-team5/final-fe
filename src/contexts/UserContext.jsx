import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialBadge = localStorage.getItem("badgeIcon");
  const initialNickname = localStorage.getItem("nickname");
  const [mainBadge, setMainBadge] = useState(initialBadge);
  const [nickname, setNickname] = useState(initialNickname);
  return (
    <UserContext.Provider
      value={{ mainBadge, setMainBadge, nickname, setNickname }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

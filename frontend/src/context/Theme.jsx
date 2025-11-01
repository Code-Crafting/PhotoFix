import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Theme = createContext(false);

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useLocalStorage("isLight", false);

  return (
    <Theme.Provider value={[isLight, setIsLight]}>
      <div className={`${isLight ? "bg-light" : "bg-primary-dark"} relative `}>
        {children}
      </div>
    </Theme.Provider>
  );
};

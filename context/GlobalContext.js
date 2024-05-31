"use client";

import { createContext, useContext, useState } from "react";

// Create Context
const GlobalContext = createContext();

// Create Provider
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);

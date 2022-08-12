import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initState = {
    chat: false,
    cart: false,
    UserProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initState);
    
    return (
        <StateContext.Provider 
        value={{
            activeMenu, setActiveMenu,
            isClicked, setIsClicked
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
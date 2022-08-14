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
    const [screenSize, setScreenSize] = useState(undefined);


    const handleClick = (clicked) => {
        setIsClicked({
            ...initState,
            [clicked]: true
           // [clicked]: !isClicked[clicked]
        })
    }

    return (
        <StateContext.Provider 
        value={{
            activeMenu, setActiveMenu,
            isClicked, setIsClicked,
            handleClick,
            screenSize, setScreenSize
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
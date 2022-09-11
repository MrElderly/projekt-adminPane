import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor]= useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeProfile, setActiveProfile] = useState(false);

    const setMode = (e) =>{
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
    
        setThemeSettings(false)

    }

    const setColor = (color) =>{
        setCurrentColor(color)

        localStorage.setItem('themeColor', color)
    
        setThemeSettings(false)

    }

     

    const handleClick = (clicked) => {
        setIsClicked({
            ...initState,
            [clicked]: true
           // [clicked]: !isClicked[clicked]
        })
    }

    const handleCloseProfile = (clicked) => {
        setIsClicked({
            ...initState,
            [clicked]: false
           // [clicked]: !isClicked[clicked]
        })
    }

    return (
        <StateContext.Provider 
        value={{
            activeMenu, setActiveMenu,
            isClicked, setIsClicked,
            handleClick,
            screenSize, setScreenSize,
            currentColor, setCurrentColor,
            currentMode, setCurrentMode,
            themeSettings, setThemeSettings,
            setMode, setColor,
            activeProfile, setActiveProfile,
            handleCloseProfile
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
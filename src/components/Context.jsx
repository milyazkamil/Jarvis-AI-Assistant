import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [isOpenSettings, setIsOpenSettings] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState(1);
  const [footerZIndex, setFooterZIndex] = useState(400);
  const [isDark, setIsDark] = useState(false);
  const [accordion, setAccordion] = useState(true);
  const [accordionCommands, setAccordionCommands] = useState(true);

  const toggleAccordion = () => {
    setAccordionCommands(true);
    accordion ? setAccordion(false) : setAccordion(true);
  };

  const toggleAccordionCommands = () => {
    setAccordion(true);
    accordionCommands ? setAccordionCommands(false) : setAccordionCommands(true);
  };

  const toggleDarkMode = () => {
    isDark ? setIsDark(false) : setIsDark(true);
  };
  
  const toggleSettings = () => {
    setIsOpenSettings(isOpenSettings ? false : true);
    footerZIndex === 400 ? setFooterZIndex(200) : setFooterZIndex(400);
  }

  return (
    <GlobalContext.Provider
      value={{
        isOpenSettings,
        selectedVoice,
        setSelectedVoice,
        toggleSettings,
        footerZIndex,
        isDark,
        setIsDark,
        toggleDarkMode,
        accordion,
        accordionCommands,
        toggleAccordion,
        toggleAccordionCommands,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext;
export const useGlobalContext = () => useContext(GlobalContext);
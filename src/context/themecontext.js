import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');

  const onChange = (data) => {
    setActiveTab(data);
  };

  return (
    <MenuContext.Provider value={{ activeTab, onChange }}>
      {children}
    </MenuContext.Provider>
  );
};

import React, {useState, createContext} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [app_state, setAppState] = useState(false);
  return (
    <AppContext.Provider value={[app_state, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};

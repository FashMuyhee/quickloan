import React from 'react';
import {AppProvider} from './app/store/AppContext';
import App from './App';

const MainApp = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};
export default MainApp;

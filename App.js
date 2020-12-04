import * as React from 'react';
import {StatusBar} from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper';
import AppIntro from './AppIntro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StackNavigator from './app/navigation/Stack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8f00bf',
    accent: '#e3cbec',
    secondary: '#b700f4',
    text: 'black',
    light: '#f0f0f0',
    grey: '#8A8A8A',
  },
  font: {
    regular: 'Open Sans',
    medium: 'Open Sans',
    light: 'Open Sans',
  },
  roundness: 4,

};

const PERSISTENCE_KEY = 'APPINTRO_STATE';

export default function Main() {
  const [introState, setIntroState] = React.useState(false);

  const checkAppIntro = async () => {
    try {
      const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
      if (
        savedStateString != undefined &&
        savedStateString != null &&
        savedStateString === 'finish'
      ) {
        setIntroState(true);
      }
    } catch {
      setIntroState(false);
    }
  };

  React.useEffect(() => {
    checkAppIntro();
  }, [introState]);

  return (
    <PaperProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />

      {introState ? <StackNavigator /> : <AppIntro />}
    </PaperProvider>
  );
}

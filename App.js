import * as React from 'react';
import {StatusBar} from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper';
import AppIntro from './AppIntro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from './app/navigation/Drawer';
import OtherStackNavigator from './app/navigation/Navigator';

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
  fonts: {
    regular: 'Open Sans Regular',
    medium: 'Open Sans Semibold',
    light: 'Open Sans Light',
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
        backgroundColor={theme.colors.secondary}
        barStyle="light-content"
      />

      {/* {introState ? <StackNavigator /> : <AppIntro />} */}
      <DrawerNavigation />
    </PaperProvider>
  );
}

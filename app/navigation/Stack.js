import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Register} from '../screens/auth';
import {VerificationTwo, Verification, Dashboard} from '../screens';
import TabNavigator from './Tab';
import AppIntro from '../../AppIntro';
import {AppContext} from '../store/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const intro_state = AsyncStorage.getItem('intro_state');
  const [app_state, setAppState] = useContext(AppContext);

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="dashboard"
      screenOptions={{
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {app_state ? (
        <>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="verification" component={Verification} />
          <Stack.Screen name="verification_two" component={VerificationTwo} />
          <Stack.Screen name="dashboard" component={Dashboard} />
        </>
      ) : (
        <Stack.Screen name="app_intro" component={AppIntro} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Register} from '../screens/auth';
import {
  VerificationTwo,
  Verification,
  Dashboard,
  LoanDetails,
  GetLoan,
  ApplyLoan,
} from '../screens';
import TabNavigator from './Tab';
import AppIntro from '../../AppIntro';
import {AppContext} from '../store/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const OtherStackNavigator = () => {
  const intro_state = AsyncStorage.getItem('intro_state');
  const [app_state, setAppState] = useContext(AppContext);

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="login"
      screenOptions={{
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="verification" component={Verification} />
      <Stack.Screen name="verification_two" component={VerificationTwo} />
      <Stack.Screen name="loan_details" component={LoanDetails} />
      <Stack.Screen name="get_loan" component={GetLoan} />
      <Stack.Screen name="apply_loan" component={ApplyLoan} />
    </Stack.Navigator>
  );
};

export default OtherStackNavigator;

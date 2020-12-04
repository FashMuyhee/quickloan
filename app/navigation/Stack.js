import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="first"
        screenOptions={{
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

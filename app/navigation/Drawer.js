import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Loan, Setting} from '../screens';
import TabNavigator from './Tab';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="dashboard"
        drawerPosition="right"
        drawerType="back">
        <Drawer.Screen
          name="dashboard"
          component={TabNavigator}
          options={{swipeEnabled: false}}
        />
        <Drawer.Screen name="setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

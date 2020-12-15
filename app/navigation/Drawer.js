import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Loan, Setting} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="loan">
        <Drawer.Screen name="loan" component={Loan} />
        <Drawer.Screen name="setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

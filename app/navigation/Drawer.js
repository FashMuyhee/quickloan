import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {MyCards, Setting} from '../screens';
import TabNavigator from './Tab';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="dashboard"
        drawerPosition="right"
        drawerType="back"
        drawerStyle={{
          backgroundColor: '#8f00bf',
        }}>
        <Drawer.Screen
          name="dashboard"
          component={TabNavigator}
          options={{swipeEnabled: false}}
          drawerLabel="None"
        />
        <Drawer.Screen
          name="setting"
          component={Setting}
          drawerLabel="None"
          options={{swipeEnabled: false}}
        />
        <Drawer.Screen
          name="my_cards"
          component={MyCards}
          drawerLabel="None"
          options={{swipeEnabled: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

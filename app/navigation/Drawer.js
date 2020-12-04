import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

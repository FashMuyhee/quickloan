import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Loan, Dashboard, Profile} from '../screens';
import StackNavigator from './Stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#8f00bf"
      inactiveColor="#8A8A8A"
      barStyle={{backgroundColor: 'white', paddingBottom: 5}}
      initialRouteName="profile">
      <Tab.Screen
        name="Dashboard"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="home"
              color={color}
              size={26}
              style={{paddingBottom: 10}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Loan"
        component={Loan}
        options={{
          tabBarLabel: 'My Loans',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="list"
              color={color}
              size={26}
              style={{paddingBottom: 10}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="person-outline"
              color={color}
              size={26}
              style={{paddingBottom: 10}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

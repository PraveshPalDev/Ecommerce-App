import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screen/Home/Home';
import Search from '../screen/Home/Search';
import Wishlist from '../screen/Home/Wishlist';
import Notification from '../screen/Home/Notification';
import Profile from '../screen/Home/Profile';
import {BottomFabBar} from 'rn-wave-bottom-bar';

export default function BottomStack() {
  const tabBarIcon = name => {
    return ({color, size}) => <Icon name={name} color={color} size={size} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5F0B65',
        tabBarActiveBackgroundColor: '#5F0B65',
        tabBarInactiveBackgroundColor: 'red',
      }}
      tabBar={props => (
        <BottomFabBar
          mode={'square' | 'default'}
          isRtl={false}
          // Add Shadow for active tab bar button
          focusedButtonStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          {...props}
        />
      )}>
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIcon('home'),
        }}
        name="HomeNested"
        component={Home}
      />
      <Tab.Screen
        name="Search"
        options={{tabBarIcon: tabBarIcon('credit-card-search')}}
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIcon('heart'),
          tabBarActiveBackgroundColor: '#45014A',
          tabBarActiveTintColor: 'purple',
        }}
        name="Wishlist"
        component={Wishlist}
      />
      <Tab.Screen
        options={{tabBarIcon: tabBarIcon('bell-ring')}}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{tabBarIcon: tabBarIcon('account')}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

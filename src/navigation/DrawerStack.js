import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screen/Home/Home';
import Search from '../screen/Home/Search';
import Wishlist from '../screen/Home/Wishlist';
import Notification from '../screen/Home/Notification';
import Profile from '../screen/Home/Profile';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

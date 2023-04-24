import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screen/splash/Splash';
import Login from '../screen/auth/Login';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

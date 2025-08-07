// src/navigation/AppStack.tsx
import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import LeaderboardScreen from '../screens/DrawerScreens/LeaderboardScreen'
import ProfileScreen from '../screens/DrawerScreens/ProfileScreen'
import { AuthContext } from '../context/authContext';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={BottomTabs} />
      <Drawer.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      {/* <DrawerItem label="Logout" onPress={logout} /> */}
    </Drawer.Navigator>
  );
};

export default AppStack;

// src/navigation/DashboardTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnnouncementsScreen from '../screens/TabScreens/AnnouncementsScreen';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import FunZoneScreen from '../screens/TabScreens/FunZoneScreen';
import SettingsScreen from '../screens/TabScreens/SettingsScreen';
// import { AuthContext } from '../context/authContext';

// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const DashboardTabs = () => {
  // const { logout } = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // 👈 this removes the tab header
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Announcements" component={AnnouncementsScreen} />
      <Tab.Screen name="FunZone" component={FunZoneScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default DashboardTabs;

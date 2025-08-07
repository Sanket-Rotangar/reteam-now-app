// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FunZoneScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the FunZone Screen!</Text>
    </View>
  );
};

export default FunZoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

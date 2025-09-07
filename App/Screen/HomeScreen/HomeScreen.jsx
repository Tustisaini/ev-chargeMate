// App/Screen/HomeScreen/HomeScreen.jsx
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import AppMapView from './AppMapView';

// 🔹 Sticky Logo Overlay (always on top)
function LogoOverlay() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../../assets/images/ev_logo.png')}
        style={styles.logo}
      />
    </View>
  );
}

// Home Tab with Map
function HomeTab() {
  return (
    <View style={styles.container}>
      <LogoOverlay />
      <View style={styles.content}>
        <AppMapView />
      </View>
    </View>
  );
}

// Favourites Tab
function FavouriteTab() {
  return (
    <View style={styles.container}>
      <LogoOverlay />
      <View style={styles.content}>
        {/* Add Favourites content later */}
      </View>
    </View>
  );
}

// Profile Tab
function ProfileTab() {
  return (
    <View style={styles.container}>
      <LogoOverlay />
      <View style={styles.content}>
        {/* Add Profile content later */}
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#27b916',
        tabBarInactiveTintColor: '#555',
        tabBarStyle: { backgroundColor: '#f0fff0', paddingBottom: 5, height: 60 },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeTab} 
        options={{ 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ) 
        }}
      />
      <Tab.Screen 
        name="Favourites" 
        component={FavouriteTab} 
        options={{ 
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ) 
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileTab} 
        options={{ 
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ) 
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  logoContainer: {
    position: 'absolute',
    top: 30,
    alignSelf: 'center',
    zIndex: 2, // always above everything
    
    borderRadius: 10,
    padding: 5,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    marginTop: 80, // space for logo so content doesn't overlap
  },
});

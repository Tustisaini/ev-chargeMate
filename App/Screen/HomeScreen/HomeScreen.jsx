// App/Screen/HomeScreen/HomeScreen.jsx
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

function HomeTab() {
  return (
    <View style={styles.tabContainer}>
      <Image
        source={require('../../../assets/images/ev_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Home content */}
    </View>
  );
}

function FavouriteTab() {
  return (
    <View style={styles.tabContainer}>
      <Image
        source={require('../../../assets/images/ev_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Favourites content */}
    </View>
  );
}

function ProfileTab() {
  return (
    <View style={styles.tabContainer}>
      <Image
        source={require('../../../assets/images/ev_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Profile content */}
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
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteTab}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="favorite" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

function HomeTab() {
  return <View style={styles.tabContainer}>{/* Home content */}</View>;
}

function FavouriteTab() {
  return <View style={styles.tabContainer}>{/* Favourites content */}</View>;
}

function ProfileTab() {
  return <View style={styles.tabContainer}>{/* Profile content */}</View>;
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
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteTab}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="favorite" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

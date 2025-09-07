// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './App/Screen/LoginScreen/LandingPage';
import AuthScreen from './App/Screen/AuthScreen/AuthScreen';
import HomeScreen from './App/Screen/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#fff' },
        }}
      >
        <Stack.Screen
          name="Landing"
          component={LandingPage}
          options={{ headerShown: false }} // full screen landing page
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // drawer handles header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './App/Screen/LoginScreen/LandingPage';
import AuthScreen from './App/Screen/AuthScreen/AuthScreen';


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
      });
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

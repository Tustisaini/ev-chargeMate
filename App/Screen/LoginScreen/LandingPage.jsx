import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, Animated, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');

export default function LandingPage({ navigation }) {
  const logoScale = useRef(new Animated.Value(0.5)).current;
  const logoTranslateY = useRef(new Animated.Value(height / 2 - 75)).current;
  const photoScale = useRef(new Animated.Value(0.8)).current;
  const photoOpacity = useRef(new Animated.Value(0)).current;
  const textFade = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoScale, { toValue: 1, duration: 2000, useNativeDriver: true }),
      Animated.timing(logoTranslateY, { toValue: 50, duration: 2000, useNativeDriver: true }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(photoOpacity, { toValue: 1, duration: 1500, useNativeDriver: true }),
        Animated.timing(photoScale, { toValue: 1, duration: 1500, useNativeDriver: true }),
      ]).start(() => {
        Animated.parallel([
          Animated.timing(textFade, { toValue: 1, duration: 1500, useNativeDriver: true }),
          Animated.timing(textTranslateY, { toValue: 0, duration: 1500, useNativeDriver: true }),
        ]).start();
      });
    });
  }, []);

  return (
    <LinearGradient colors={['#e0f2e9', '#ffffff']} style={styles.container}>
      <Animated.Image
        source={require('../../../assets/images/ev_logo.png')}
        style={[styles.logo, { transform: [{ scale: logoScale }, { translateY: logoTranslateY }] }]}
        resizeMode="contain"
      />

      <Animated.Image
        source={require('../../../assets/images/main_photo.png')}
        style={[styles.mainPhoto, { opacity: photoOpacity, transform: [{ scale: photoScale }] }]}
        resizeMode="cover"
      />

      <Animated.View
        style={{
          opacity: textFade,
          transform: [{ translateY: textTranslateY }],
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 40,
        }}
      >
        <Text style={styles.headline}>Your Ultimate EV Charging Station Finder</Text>
        <Text style={styles.subtext}>
          Find EV charging stations near you, plan trips, and so much more—all in one click!
        </Text>
      </Animated.View>

      <TouchableOpacity
        onPress={() => navigation.replace('AuthScreen')}
        style={styles.getStartedButton}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 80 },
  logo: { width: 200, height: 150, marginBottom: 30 },
  mainPhoto: { width: width * 0.8, height: width * 0.5, borderRadius: 20, marginTop: 30 },
  headline: { fontSize: 25, fontWeight: 'bold', fontFamily: 'Poppins-Bold', textAlign: 'center', color: '#222', paddingHorizontal: 20 },
  subtext: { marginTop: 10, fontSize: 16, fontFamily: 'Poppins-Regular', textAlign: 'center', color: '#555', paddingHorizontal: 30, lineHeight: 20 },
  getStartedButton: { marginTop: 20, backgroundColor: '#27b916', paddingVertical: 12, paddingHorizontal: 40, borderRadius: 25 },
  getStartedText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

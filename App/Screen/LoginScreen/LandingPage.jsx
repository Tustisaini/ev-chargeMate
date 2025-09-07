import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function LandingPage({ navigation }) {
  const logoScale = useRef(new Animated.Value(0.5)).current;
  const logoTranslateY = useRef(new Animated.Value(height / 2 - 75)).current;
  const photoScale = useRef(new Animated.Value(0.8)).current;
  const photoOpacity = useRef(new Animated.Value(0)).current;
  const textFade = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(20)).current;
  const buttonFade = useRef(new Animated.Value(0)).current;

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
          Animated.timing(buttonFade, { toValue: 1, duration: 1500, useNativeDriver: true }),
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
        }}
      >
        <Text style={styles.headline}>Your Ultimate EV Charging Station Finder</Text>
        <Text style={styles.subtext}>
          Find EV charging stations near you, plan trips, and so much more—all in one click!
        </Text>
      </Animated.View>

      <Animated.View style={{ opacity: buttonFade, marginTop: 40 }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 80 },
  logo: { width: 200, height: 150, marginBottom: 30 },
  mainPhoto: { width: width * 0.8, height: width * 0.5, borderRadius: 20, marginTop: 30 },
  headline: { fontSize: 25, fontFamily: 'Poppins-Bold', textAlign: 'center', color: '#222', paddingHorizontal: 20 },
  subtext: { marginTop: 10, fontSize: 16, fontFamily: 'Poppins-Regular', textAlign: 'center', color: '#555', paddingHorizontal: 30, lineHeight: 20 },
  button: { backgroundColor: '#34c759', paddingVertical: 15, paddingHorizontal: 60, borderRadius: 30 },
  buttonText: { fontFamily: 'Poppins-Bold', fontSize: 18, color: '#fff' },
});

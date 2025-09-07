import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';


export default function AuthScreen({ navigation }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      setEmail('');
      setPassword('');
      navigation.replace('Home'); // go to HomeScreen
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/ev_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Login'}</Text>

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity onPress={handleAuth} style={styles.buttonContainer}>
        <LinearGradient colors={['#20af10aa', '#b0fea8ff']} start={[0, 0]} end={[1, 0]} style={styles.gradientButton}>
          <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Login'}</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)} style={{ marginTop: 15 }}>
        <Text style={styles.toggleText}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  logo: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 15 },
  buttonContainer: { width: '50%', borderRadius: 25, overflow: 'hidden', marginTop: 10 },
  gradientButton: { paddingVertical: 10, alignItems: 'center', borderRadius: 25 },
  buttonText: { color: 'black', fontSize: 16, fontWeight: 'bold' },
  toggleText: { color: '#000000ff', textAlign: 'center', marginTop: 10 },
});

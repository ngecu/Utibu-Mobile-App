import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, ToastAndroid } from 'react-native';
import { View } from '@/components/Themed';
import { Avatar, Button, TextInput, Title } from 'react-native-paper';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby!', ToastAndroid.SHORT);
  };

  const handleSignUp = () => {
    showToast();
  };

  return (
    <View style={styles.container}>
      <Title>Sign Up</Title>
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        Sign Up
      </Button>
      <Text style={{ color: 'white', textAlign: 'center', marginTop: 2 }}>
        Already have an account? <Link href="/login">Login</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#03ADA4',
    height: screenHeight + 25,
    width: screenWidth,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#74C988',
    color: 'white',
  },
  image: {
    position: 'relative',
    top: screenHeight / -15,
    left: screenWidth / 6,
    right: 0,
  },
});

import { Dimensions, StyleSheet, Text, ToastAndroid } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome
import { View } from '@/components/Themed';
import { ActivityIndicator, Avatar, Button, Card, MD2Colors, TextInput } from 'react-native-paper';
import React from 'react';
import { Link } from 'expo-router';
import useFetch from '@/hook/useFetch';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function LoginScreen() {
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const { isLoading, error, refetch } = useFetch('customer/login', 'POST', {},{Email,Password})

  const showToast = () => {
     refetch();
     console.log("error from second ",error);
     
    ToastAndroid.show(`${error}`, ToastAndroid.SHORT);
  };

  const handleLogin = () => {
    showToast();
  };

  return (
    <View style={styles.container}>
      {isLoading ?  <ActivityIndicator animating={true} color={MD2Colors.red800} /> :<> 
        
      <Avatar.Image size={200} style={styles.image} source={require('../assets/images/LOGO.png')} />

{/* Input container with Font Awesome icon */}
<View style={styles.inputContainer}>
  <FontAwesome name="user" size={24} color="#A3A2A3" style={styles.icon} />
  <TextInput
    label="Email"
    value={Email}
    onChangeText={setEmail}
    style={styles.input}
  />
</View>

{/* Input container with Font Awesome icon */}
<View style={styles.inputContainer}>
  <FontAwesome name="lock" size={24} color="#A3A2A3" style={styles.icon} />
  <TextInput
    label="Password"
    value={Password}
    onChangeText={setPassword}
    secureTextEntry
    style={styles.input}
  />
</View>

<Text style={styles.forgotPassword}>Forgot password?</Text>

<Button mode="contained" onPress={handleLogin} style={styles.button}>
  Login
</Button>

<Text style={{ color: "white", textAlign: "center", marginTop: 2 }}>Don't have an account? <Link href="/signup"> Sign Up </Link></Text>

<View style={styles.orContainer}>
  <View style={styles.orLine} />
  <Text style={styles.orText}>OR</Text>
  <View style={styles.orLine} />
</View>

<Button mode="contained" style={styles.button}>
  <Link href="/(tabs)/one"> Dashboard </Link>
</Button>


        
        </>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#03ADA4",
    height: screenHeight + 25,
    width: screenWidth,
    textAlign: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white'
  },
  inputContainer: {
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft:10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius:15,
    borderTopRightRadius:20

  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    borderRadius: 20,
   
  },
  button: {
    marginTop: 20,
    backgroundColor: "#74C988",
    color: "white"
  },
  image: {
    position: 'relative',
    top: screenHeight / -15,
    left: screenWidth / 6,
    right: 0,
  },
  forgotPassword: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#03ADA4'
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#FFFFFF',
  },
  orText: {
    color: '#FFFFFF',
    marginHorizontal: 10,
  },
});

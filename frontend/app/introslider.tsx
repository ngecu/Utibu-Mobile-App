import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#03ADA4",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:"white"

  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 32,
    marginBottom: 32,
    color:"white"

  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor:"#74C988",
    color:"white"
  },
});

const slides = [
  {
    title: 'Welcome to Utibu Health',
    text: 'Welcome to Utibu Health, your trusted healthcare provider for managing chronic conditions such as HIV, diabetes, and hypertension. With our innovative mobile app, you can now conveniently order your medication remotely from anywhere. No more waiting in long queues or visiting the pharmacy in person. Order your medication with ease and have it ready for collection or delivery at your convenience.',
    image: require('../assets/images/doc1.png'),
    
  },
  {
    title: 'Seamless Ordering and Payment',
    text: `Our mobile app offers a seamless ordering and payment process. Simply browse through our extensive inventory of medication items, place your order, and choose your preferred payment method. Whether you prefer to pay immediately or at the point of collection, we've got you covered. Plus, with real-time updates on stock availability, you can rest assured that your order will be fulfilled promptly. Experience the convenience of managing your medication orders and payments with Utibu Health`,
    image: require('../assets/images/doc2.png'),
  },
  // Add more slides as needed
];

const IntroSlider = () => {
  const renderNextButton = () => (
    <View style={styles.buttonCircle}>
            <FontAwesome name="arrow-right" size={24} color="white"  />

    </View>
  );

  const renderDoneButton = () => (
    <View style={styles.buttonCircle}>
      <FontAwesome name="arrow-right" size={24} color="white"  />
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} />
      <Text style={styles.text}>{item.text}</Text>
      {/* <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}> */}
    <Link href='/login'>
      
      Get Started</Link>
  {/* </Button> */}
    </View>
  );

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
    />
  );
};

export default IntroSlider;

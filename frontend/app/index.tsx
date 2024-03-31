import { Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native';
import {  ScrollView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { View } from '@/components/Themed';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SvgUri } from 'react-native-svg';
import { Avatar, Button, Text, Title } from 'react-native-paper';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  }
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  

export default function IndexScreen() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
                   headerShadowVisible: false,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
         
          style={styles.container}
        >
            <Avatar.Image size={200} style={styles.image} source={require('../assets/images/LOGO.png')} />
            <Text style={styles.title} variant="displayLarge">Hey Doc</Text>
            <Text style={styles.normal}>Welcome to our health platform. Explore, Connect, and Thrive!</Text>
            <Button  style={styles.button} mode="contained" buttonColor="#FFFFFF" onPress={() => console.log('Pressed')}>
            <Link href="/introslider">Get Started</Link>
    
  </Button>
            

        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor:"#03ADA4",
    height:screenHeight+25,
    width:screenWidth,
    textAlign:"center"

  },
  image: {
    position: 'relative',
    top: screenHeight / -15,  
    left: screenWidth/6,
    right: 0,
  },
  webview: {
    flex: 1,
  },
  title: {
    // fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'white'
  },
  normal:{
    textAlign: 'center',
    color:'white'
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor:"#74C988",
    color:"white"
  },
});

import { StyleSheet, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { View } from '@/components/Themed';
import React from 'react';
import { Avatar, Card, IconButton, Searchbar } from 'react-native-paper';
import { TabBarIcon } from './_layout';
import ProductCard from '@/components/ProductCard';

export default function MedicationScreen() {

  const screenWidth = Dimensions.get('window').width;


  return (
    <View
    style={{
      flexDirection: 'column',
      backgroundColor:'white'
    }}>
   
  <View
    style={{
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:40,
      position:'relative',
      // top:-20,
      // height:100,
      padding:20
    }}>
        <Text style={{textAlign:'center',fontSize:26}}>Medication</Text>
    <Searchbar 
    placeholder='Search drugs, category...'
    style={{width:screenWidth - 40,backgroundColor:"#FBFBFB",borderColor:'#E8F3F1', borderWidth: 1 }} />

  </View>

  <View style={{paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,backgroundColor:'white',
    flexDirection: 'row', // Arrange images horizontally
    justifyContent: 'space-between', // Evenly distribute space around images
    width: '100%', // Make the container width 100%
}}>
      <Text style={styles.healthArticle}>Popular Products</Text>
      <TouchableOpacity onPress={() => console.log('See All clicked')}>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>

  <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
      </View>
    </ScrollView>

    <View style={{paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,backgroundColor:'white',
    flexDirection: 'row', // Arrange images horizontally
    justifyContent: 'space-between', // Evenly distribute space around images
    width: '100%', // Make the container width 100%
}}>
      <Text style={styles.healthArticle}>Popular Products</Text>
      <TouchableOpacity onPress={() => console.log('See All clicked')}>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>

  <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
      </View>
    </ScrollView>


    <View style={{paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,backgroundColor:'white',
    flexDirection: 'row', // Arrange images horizontally
    justifyContent: 'space-between', // Evenly distribute space around images
    width: '100%', // Make the container width 100%
}}>
      <Text style={styles.healthArticle}>Popular Products</Text>
      <TouchableOpacity onPress={() => console.log('See All clicked')}>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>

  <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
      </View>
    </ScrollView>

    <View style={{paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,backgroundColor:'white',
    flexDirection: 'row', // Arrange images horizontally
    justifyContent: 'space-between', // Evenly distribute space around images
    width: '100%', // Make the container width 100%
}}>
      <Text style={styles.healthArticle}>Popular Products</Text>
      <TouchableOpacity onPress={() => console.log('See All clicked')}>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>

  <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
        <ProductCard imageUri={'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG'} title="African Pride Moisture Miracle Moroccan Masque" price={10} />
      </View>
    </ScrollView>
    
  </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1, // Ensure that the content expands to fill the available space
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow the items to wrap to the next row
    justifyContent: 'space-between',
    paddingHorizontal: 10, // Add horizontal padding to the container
  },

  first: {
    // paddingTop:100,
    // backgroundColor: "lightblue",
    // height: 100, 
    flexDirection: 'row', 

  },
  welcomeText: {
    color: "white",
    fontSize: 20,
  },
 
  imageColumn: {
    flex: 1, // Take up 1/2 of the row
    justifyContent: 'center', // Align image vertically
    alignItems: 'center', // Align image horizontally
  },
  image: {
    paddingTop:50,
    height: 200, // Adjust image height as needed
  },
  textColumn: {
    flex: 1, // Take up 1/2 of the row
    justifyContent: 'center', // Align text vertically
    alignItems: 'center', // Align text horizontally
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  container: {
    backgroundColor:'white',
    flexDirection: 'row', // Arrange images horizontally
    justifyContent: 'space-between', // Evenly distribute space around images
    width: '100%', // Make the container width 100%
  },
  images: {
    width: 100, // Adjust image width as needed
    height: 100, // Adjust image height as needed
  },
  healthArticle: {
    fontWeight: 'bold', // Make the text bold
  },
  seeAll: {
    color: 'blue', // Set text color to blue
  },
});

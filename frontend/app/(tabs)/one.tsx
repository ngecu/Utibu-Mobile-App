import { StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { View } from '@/components/Themed';
import React from 'react';
import { Avatar, Card, IconButton, Searchbar } from 'react-native-paper';
import { TabBarIcon } from './_layout';

export default function HomeScreen() {

  const screenWidth = Dimensions.get('window').width;


  return (
    <View
    style={{
      flexDirection: 'column',
      backgroundColor:'white'
    }}>
    <View
    style={{
      flexDirection: 'row',
    }}>
     <View style={{ backgroundColor: '#CDE2E8', flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={{ color: 'black', textAlign: 'center' }}>Welcome DevNgecu</Text>
</View>

    <View style={{backgroundColor: '#CDE2E8',flex: 0.5 }}> 
    <Image style={styles.image} source={require('../../assets/images/young-women.png')} />
    </View>
    
  </View>
  <View
    style={{
      flexDirection: 'row',
      backgroundColor:'white',
      borderRadius:40,
      position:'relative',
      top:-20,
      // height:100,
      padding:20
    }}>
     
    <Searchbar 
    placeholder='Search doctor, drugs, articles...'
    style={{width:screenWidth - 40,backgroundColor:"#FBFBFB",borderColor:'#E8F3F1', borderWidth: 1 }} />

  </View>

  <View style={styles.container}>
      <Image style={styles.images} source={require('../../assets/images/Group168.png')} />
      <Image style={styles.images} source={require('../../assets/images/Group169.png')} />
      <Image style={styles.images} source={require('../../assets/images/Group170.png')} />
    </View>
    <View style={{padding:20,backgroundColor:'white',
    flexDirection: 'row', // Arrange images horizontally
    justifyContent: 'space-between', // Evenly distribute space around images
    width: '100%', // Make the container width 100%
}}>
      <Text style={styles.healthArticle}>Health Article</Text>
      <TouchableOpacity onPress={() => console.log('See All clicked')}>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>

    <View style={{backgroundColor:'white',
    paddingTop:5,marginLeft:5
}} >
  <Card style={{backgroundColor:'white',paddingRight:20,width:'97%',marginTop:5}}>
    <Card.Title
    title="The 25 Healthiest Fruits You Can Eat, According to a Nutritionist"
    titleStyle={{ fontWeight: 'bold', color: 'black',paddingLeft:5 }}
    subtitle="Jun 10, 20223 ,5min read"
    subtitleStyle={{ color: 'gray',paddingLeft:5 }}
    left={() => <Image  source={require('../../assets/images/doctor.png')} />}
    right={() => <TabBarIcon name="bookmark" color={'#407CE2'} />
  }
  />
  </Card>

  <Card style={{backgroundColor:'white',paddingRight:20,width:'97%',marginTop:5}}>
    <Card.Title
    title="The 25 Healthiest Fruits You Can Eat, According to a Nutritionist"
    titleStyle={{ fontWeight: 'bold', color: 'black',paddingLeft:5 }}
    subtitle="Jun 10, 20223 ,5min read"
    subtitleStyle={{ color: 'gray',paddingLeft:5 }}
    left={() => <Image  source={require('../../assets/images/doctor.png')} />}
    right={() => <TabBarIcon name="bookmark" color={'#407CE2'} />
  }
  />
  </Card>

  <Card style={{backgroundColor:'white',paddingRight:20,width:'97%',marginTop:5}}>
    <Card.Title
    title="The 25 Healthiest Fruits You Can Eat, According to a Nutritionist"
    titleStyle={{ fontWeight: 'bold', color: 'black',paddingLeft:5 }}
    subtitle="Jun 10, 20223 ,5min read"
    subtitleStyle={{ color: 'gray',paddingLeft:5 }}
    left={() => <Image  source={require('../../assets/images/doctor.png')} />}
    right={() => <TabBarIcon name="bookmark" color={'#407CE2'} />
  }
  />
  </Card>
  <Card style={{backgroundColor:'white',paddingRight:20,width:'97%',marginTop:5}}>
    <Card.Title
    title="The 25 Healthiest Fruits You Can Eat, According to a Nutritionist"
    titleStyle={{ fontWeight: 'bold', color: 'black',paddingLeft:5 }}
    subtitle="Jun 10, 20223 ,5min read"
    subtitleStyle={{ color: 'gray',paddingLeft:5 }}
    left={() => <Image  source={require('../../assets/images/doctor.png')} />}
    right={() => <TabBarIcon name="bookmark" color={'#407CE2'} />
  }
  />
  </Card>
    </View>

    
  </View>
  );
}

const styles = StyleSheet.create({
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

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const ProductCartCard = ({ imageUri, price,title }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.price}>{title}</Text>

      <View style={styles.quantityContainer}>
      <Text style={styles.price}>${price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    elevation: 3,
    width:screenWidth,
    height:screenHeight/5
  },
  image: {
    width: '100%',
    height: '50%',
    marginBottom: 10,
  },
  
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  quantityButton: {
    backgroundColor: '#407CE2',
    color:'white',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 5,
  },
});

export default ProductCartCard;

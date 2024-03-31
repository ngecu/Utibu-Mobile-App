import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { IconButton, Card } from 'react-native-paper'; // Import Card component from react-native-paper
import ProductCard from '@/components/ProductCard';
import ProductCartCard from '@/components/ProductCartCard';
const screenWidth = Dimensions.get('window').width;

export default function CartScreen() {
  // Dummy cart items data
  const cartItems = [
    { id: 1, title: "Product 1", price: 10, imageUri: 'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG' },
    { id: 2, title: "Product 2", price: 15, imageUri: 'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG' },
    { id: 3, title: "Product 3", price: 20, imageUri: 'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG' },
    { id: 4, title: "Product 4", price: 25, imageUri: 'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG' },
    { id: 5, title: "Product 5", price: 30, imageUri: 'https://media.mydawa.com/Images/Products/d8d1c4bd-cc91-4e13-a0d2-cb2719a5f102.JPG' }
  ];
  
  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Function to render cart items
  const renderCartItems = () => {
    return cartItems.map(item => (
      <ProductCartCard
        imageUri={item.imageUri}
        key={item.id}
        title={item.title}
        price={item.price}
        // You can add more props like imageUri if needed
      />
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cartItemsContainer}>
          {renderCartItems()}
        </View>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardText}>Subtotal: ${calculateTotalPrice()}</Text>
            {/* You can add more details like taxes, shipping, etc. */}
          </Card.Content>
        </Card>
      </ScrollView>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => console.log('Checkout clicked')}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  cartItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  checkoutButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    marginVertical: 10,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

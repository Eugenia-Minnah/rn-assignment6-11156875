import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemDescription}>Recycle Boucle Knit Cardigan Pink</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
        <Image source={require('../assets/remove.png')} style={styles.removeButtonImage} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.home}>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <Image source={require('../assets/Logo.png')} style={{ marginRight: 100, marginLeft: 150 }} />
        <Image source={require('../assets/Search.png')} style={{ left: 30 }} />
      </View>
      <Text style={{ marginVertical: 10, textAlign: 'center', fontSize: 22, fontFamily:'Times New Roman', textDecorationLine: 'underline'  }}>CHECKOUT</Text>
      </View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  home:{
    height:150,
    width:'100%'
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomColor: '#ffffff',
    paddingBottom: 5,
  },
  cartItemImage: {
    width:120,
    height: 180,
    resizeMode: 'cover',
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  cartItemName: {
    fontSize: 17,
    fontWeight: 24,
    textTransform: 'uppercase'
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
  },
  cartItemPrice: {
    fontSize: 18,
    color: '#FF8000',
  },
  removeButton: {
    marginLeft: 16,
  },
  removeButtonImage: {
    width: 25,
    height: 25,
    top:50,
  },
  shoppingBagImage:{
    alignItems: 'center'
  },
});